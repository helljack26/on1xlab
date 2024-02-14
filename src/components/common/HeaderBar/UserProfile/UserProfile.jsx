// Import necessary libraries and components
import React, { useState, useRef } from "react";

// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "../../../../store/MultilanguageStore";
import { useUserStore } from "../../../../store/UserStore";
import { useSidePanelStore } from "../../../../store/sidePanelStore";

// Variables
import IMAGES from "../../../../assets/images";
import C from "../../../../assets/style/colors";
import SIDE_PANELS from "../../../../assets/sidePanelName";

// Components
import LanguageSwitch from "../../LanguageSwitch/LanguageSwitch";
import Logout from "../../Buttons/Logout/Logout";
import HeaderPopup from "../HeaderPopup/HeaderPopup";

// Style
import { HeaderStyle } from "../HeaderStyle";
const {
    UserProfileWrapper,
    UserProfileButton,
    UserProfileIcon,
    UserProfileImg,
    UserProfileIconImg,
    UserProfileText,
    ProfileLink,
    ProfileLinkRow,
    ProfileLinkColumn,
    ProfileLinkName,
    ProfileLinkSecondary,
    ProfileLinkButton,
    PopupTwoColumn,
    ArrowDown,
} = HeaderStyle;

// UserProfile component definition
const UserProfile = observer(() => {
    // Multilanguage store
    const { language, getTranslation } = useMultilanguageStore();
    const { userData, userFullName } = useUserStore();

    // Avatar url
    const avatarUrl = userData?.avatar_url
                        ? userData?.avatar_url.includes("http")
            ? userData?.avatar_url
            : process.env.REACT_APP_PATH + userData?.avatar_url
        : null;

    // Use the side panel store
    const sidePanelStore = useSidePanelStore();

    // Ref for the HeaderPopup component
    const popupRef = useRef(null);

    // State to manage the visibility of the popup
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Function to handle the toggle of the popup
    const handlePopupToggle = () => {
        if (isPopupVisible) {
            popupRef.current.closePopup();
        } else {
            popupRef.current.openPopup();
        }
        setIsPopupVisible(!isPopupVisible);
    };

    const handleToggleProfilePanel = () => {
        // Toggle the sideMenu state in the global store
        if (!sidePanelStore.panels[SIDE_PANELS.PROFILE_PANEL].isOpen) {
            // Open sidepanel
            sidePanelStore.openSidePanel(SIDE_PANELS.PROFILE_PANEL);
            // Close popup
            popupRef.current.closePopup();
            setIsPopupVisible(!isPopupVisible);
        } else {
            sidePanelStore.closeSidePanel(SIDE_PANELS.PROFILE_PANEL);
        }
    };

    // Popup content
    const popupContent = (
        <>
            {/* Profile */}
            <ProfileLink as="span" onClick={handleToggleProfilePanel}>
                <ProfileLinkRow>
                    {/* Icon */}
                    <UserProfileIcon>
                        {avatarUrl ? (
                            <UserProfileImg src={avatarUrl} />
                        ) : (
                            <UserProfileIconImg icon={IMAGES.UserIcon} />
                        )}
                    </UserProfileIcon>
                    {/* Name */}
                    <ProfileLinkColumn>
                        <ProfileLinkName>{userFullName}</ProfileLinkName>
                        <ProfileLinkSecondary>
                            Адміністратор
                        </ProfileLinkSecondary>
                    </ProfileLinkColumn>
                </ProfileLinkRow>
                {/* Button */}
                <ProfileLinkButton bgcolor={C.main} tcolor={"white"}>
                    {getTranslation("common.profile")}
                </ProfileLinkButton>
            </ProfileLink>

            {/* Two-column popup content */}
            <PopupTwoColumn>
                {/* Language switch */}
                <LanguageSwitch isSimpleButton={true} />
                {/* Logout */}
                <Logout />
            </PopupTwoColumn>
        </>
    );

    // Unique ID for the button
    const buttonId = "user_profile_button";

    // Render the UserProfile component
    return (
        <UserProfileWrapper>
            {/* Button */}
            <UserProfileButton
                id={buttonId}
                onClick={handlePopupToggle}
                isPopupVisible={isPopupVisible}
            >
                <UserProfileIcon>
                    {avatarUrl ? (
                        <UserProfileImg src={avatarUrl} />
                    ) : (
                        <UserProfileIconImg icon={IMAGES.UserIcon} />
                    )}
                </UserProfileIcon>
                <UserProfileText>
                    {userData && userData.username}
                </UserProfileText>
                <ArrowDown></ArrowDown>
            </UserProfileButton>

            {/* HeaderPopup component */}
            <HeaderPopup
                ref={popupRef}
                content={popupContent}
                setIsPopupVisible={setIsPopupVisible}
                isPopupVisible={isPopupVisible}
                buttonId={buttonId}
            />
        </UserProfileWrapper>
    );
});

export default UserProfile;
