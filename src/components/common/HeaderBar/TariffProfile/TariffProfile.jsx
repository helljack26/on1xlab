// Import necessary libraries and components
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "../../../../store/MultilanguageStore";

// Variables
import IMAGES from "../../../../assets/images";
import C from "../../../../assets/style/colors";
import RouteName from "../../../../assets/routeName";

// Components
import HeaderPopup from "../HeaderPopup/HeaderPopup";

// Style
import { HeaderStyle } from "../HeaderStyle";
const {
    ProfileWrapper,
    ProfileButton,
    UserProfileIcon,
    UserProfileIconImg,
    ProfileIcon,
    ProfileIconImg,
    ProfileText,
    ProfileLink,
    ProfileLinkRow,
    ProfileLinkColumn,
    ProfileLinkName,
    ProfileLinkSecondary,
    ProfileLinkButton,
    PopupThreeColumn,
    PopupLinkTopIcon,
    Icon,
    ArrowDown,
} = HeaderStyle;

// TariffProfile component definition
const TariffProfile = observer(() => {
    // Multilanguage store
    const { language, getTranslation } = useMultilanguageStore();

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

    // Popup content
    const popupContent = (
        <>
            {/* Profile */}
            <ProfileLink as="span">
                <ProfileLinkRow>
                    {/* Icon */}
                    <UserProfileIcon>
                        <UserProfileIconImg
                            icon={IMAGES.TariffIcon}
                            bgcolor={C.orange}
                        />
                    </UserProfileIcon>
                    {/* Name */}
                    <ProfileLinkColumn>
                        <ProfileLinkName>
                            {getTranslation("header.inviteEmployees")}
                        </ProfileLinkName>
                        <ProfileLinkSecondary
                            as={Link}
                            to={RouteName.why_upgrade}
                            decoration={"underline"}
                        >
                            {getTranslation("header.tariffQuestion")}
                        </ProfileLinkSecondary>
                    </ProfileLinkColumn>
                </ProfileLinkRow>
                {/* Button */}
                <ProfileLinkButton
                    as={Link}
                    to={RouteName.subscriptionChildren.subscription_list}
                    bgcolor={C.orange}
                    tcolor={"white"}
                >
                    {getTranslation("header.purchase")}
                </ProfileLinkButton>
            </ProfileLink>

            {/* Three-column popup content */}
            <PopupThreeColumn>
                <PopupLinkTopIcon to={RouteName.implementation_install}>
                    <Icon icon={IMAGES.FileCheckedIcon}></Icon>
                    <span>
                        {getTranslation("header.implementation_install")}
                    </span>
                </PopupLinkTopIcon>
                <PopupLinkTopIcon>
                    <Icon icon={IMAGES.ChatIcon}></Icon>
                    <span>{getTranslation("header.support")}</span>
                </PopupLinkTopIcon>
                <PopupLinkTopIcon>
                    <Icon icon={IMAGES.AimIcon}></Icon>
                    <span>{getTranslation("header.ordersAndInvoices")}</span>
                </PopupLinkTopIcon>
            </PopupThreeColumn>
        </>
    );

    // Unique ID for the button
    const buttonId = "tariff_profile_button";

    // Render the TariffProfile component
    return (
        <ProfileWrapper>
            {/* Button */}
            <ProfileButton
                id={buttonId}
                onClick={handlePopupToggle}
                bgcolor={C.orange}
                isPopupVisible={isPopupVisible}
            >
                <ProfileIcon>
                    <ProfileIconImg icon={IMAGES.TariffIcon} />
                </ProfileIcon>
                <ProfileText>{getTranslation("header.buyTariff")}</ProfileText>
                <ArrowDown></ArrowDown>
            </ProfileButton>

            {/* HeaderPopup component */}
            <HeaderPopup
                ref={popupRef}
                content={popupContent}
                setIsPopupVisible={setIsPopupVisible}
                isPopupVisible={isPopupVisible}
                buttonId={buttonId}
            />
        </ProfileWrapper>
    );
});

export default TariffProfile;
