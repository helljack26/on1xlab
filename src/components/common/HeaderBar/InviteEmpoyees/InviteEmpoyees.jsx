// Import necessary libraries and components
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "../../../../store/MultilanguageStore";
import useSidePanelStore from "src/store/sidePanelStore";

// Variables
import IMAGES from "../../../../assets/images";
import C from "../../../../assets/style/colors";
import RouteName from "../../../../assets/routeName";
import SIDE_PANELS from "../../../../assets/sidePanelName";

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
    EmployeesLink,
    ProfileLinkRow,
    ProfileLinkColumn,
    ProfileLinkName,
    ProfileLinkSecondary,
    ProfileLinkButton,
    PopupOneTwoColumn,
    PopupLinkTopIcon,
    Icon,
    ArrowDown,
} = HeaderStyle;

// InviteEmpoyees component definition
const InviteEmpoyees = observer(() => {
    // Multilanguage store
    const { language, getTranslation } = useMultilanguageStore();

    // Use the side panel store
    const sidePanelStore = useSidePanelStore();

    // Ref to manage the HeaderPopup component
    const popupRef = useRef(null);

    // State to manage popup visibility
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Function to toggle popup visibility
    const handlePopupToggle = () => {
        if (isPopupVisible) {
            popupRef.current.closePopup();
        } else {
            popupRef.current.openPopup();
        }
        setIsPopupVisible(!isPopupVisible);
    };

    // Number of employees (example value)
    const employeesCount = 2;

    const handleToggleProfilePanel = () => {
        // Toggle the sideMenu state in the global store
        if (!sidePanelStore.panels[SIDE_PANELS.INVITEEMPLOYEE_PANEL].isOpen) {
            // Open sidepanel
            sidePanelStore.openSidePanel(SIDE_PANELS.INVITEEMPLOYEE_PANEL);
            // Close popup
            popupRef.current.closePopup();
            setIsPopupVisible(!isPopupVisible);
        } else {
            sidePanelStore.closeSidePanel(SIDE_PANELS.INVITEEMPLOYEE_PANEL);
        }
    };

    // Popup content
    const popupContent = (
        <>
            {/* Profile link */}
            <ProfileLink as="span">
                <ProfileLinkRow>
                    {/* Icon */}
                    <UserProfileIcon>
                        <UserProfileIconImg
                            icon={IMAGES.InviteIcon}
                            bgcolor={C.green}
                        />
                    </UserProfileIcon>
                    {/* Name */}
                    <ProfileLinkColumn>
                        <ProfileLinkName>
                            {getTranslation("header.inviteEmployees")}
                        </ProfileLinkName>

                        <ProfileLinkSecondary
                            as={Link}
                            to={RouteName.why_invite}
                            decoration={"underline"}
                        >
                            {getTranslation("header.whyInvite")}
                        </ProfileLinkSecondary>
                    </ProfileLinkColumn>
                </ProfileLinkRow>
                {/* Button */}
                <ProfileLinkButton
                    as={Link}
                    onClick={handleToggleProfilePanel}
                    bgcolor={C.green}
                    tcolor={"white"}
                >
                    {getTranslation("header.invite")}
                </ProfileLinkButton>
            </ProfileLink>

            {/* PopupOneTwoColumn for structure and employees links */}
            <PopupOneTwoColumn>
                {/* Structure link */}
                <PopupLinkTopIcon to={RouteName.company_structure}>
                    <Icon icon={IMAGES.StructureIcon}></Icon>
                    <span>{getTranslation("common.structure")}</span>
                    <ProfileLinkButton>
                        {getTranslation("common.settings")}
                    </ProfileLinkButton>
                </PopupLinkTopIcon>

                {/* Employees link */}
                <EmployeesLink to={RouteName.companyChildren.employees}>
                    <ProfileLinkRow>
                        {/* Icon */}
                        <UserProfileIcon>
                            <UserProfileIconImg
                                icon={IMAGES.EmployeesIcon}
                                bgcolor={C.green}
                            />
                        </UserProfileIcon>
                        {/* Name */}
                        <ProfileLinkColumn>
                            <ProfileLinkName>
                                {getTranslation("common.employees")}
                            </ProfileLinkName>

                            <ProfileLinkSecondary>
                                {getTranslation("header.employeess")}:{" "}
                                {employeesCount}
                            </ProfileLinkSecondary>
                        </ProfileLinkColumn>
                    </ProfileLinkRow>
                </EmployeesLink>
            </PopupOneTwoColumn>
        </>
    );

    // Button ID
    const buttonId = "invite_employees_button";

    // Render the InviteEmpoyees component
    return (
        <ProfileWrapper>
            {/* Button */}
            <ProfileButton
                id={buttonId}
                onClick={handlePopupToggle}
                bgcolor={C.green}
                isPopupVisible={isPopupVisible}
            >
                <ProfileIcon>
                    <ProfileIconImg icon={IMAGES.InviteIcon} />
                </ProfileIcon>

                <ProfileText>{getTranslation("header.invite")}</ProfileText>

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

// Export the InviteEmpoyees component as the default export
export default InviteEmpoyees;
