import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Collapse from "@mui/material/Collapse";

// Variables
import SIDE_PANELS from "../../../assets/sidePanelName";
import RouteName from "../../../assets/routeName";

// Import stores
import { useMultilanguageStore } from "../../../store/MultilanguageStore"; // Store for multilingual support
import { useSidePanelStore } from "../../../store/sidePanelStore"; // Store for managing side panels
// Hooks
import { useMobileStore } from "../../../store/isMobileStore"; // Store for managing side panels
// Component
import SlidePanel from "../SlidePanel/SlidePanel";
// Style
import { SideMenuStyle } from "./SideMenuStyle";

// Destructure styles for better readability
const {
    SideMenuBlock,
    LogoText,
    SideMenuLinkWrapper,
    SideMenuLink,
    SideMenuLinkText,
    SideMenuDropdown,
    SideMenuDropdownLink,
    SideMenuDropdownLinkText,
    IconWrapper,
} = SideMenuStyle;

// Functional component for the SideMenu
const SideMenu = observer(() => {
    // Hook into MultilanguageStore for translations
    const { language, getTranslation, getNavLinkTranslation } =
        useMultilanguageStore();

    const { isMobile } = useMobileStore();

    // Hook into SidePanelStore for handling side panel state
    const { closeSidePanel } = useSidePanelStore();

    // Get the current location from React Router
    const location = useLocation();

    // Array of navigation links
    const navLinks = useMemo(
        () => [
            {
                path: RouteName.accountantChildren.enterprise_list,
                text: getTranslation("navLinks.accountant"),
                children: [
                    {
                        path: RouteName.reportChildren.fop_2_gr_en_esv,
                        text: getNavLinkTranslation(
                            RouteName.accountantSubPages.reports
                        ),
                    },
                ],
            },
            {
                path: RouteName.subscriptionChildren.subscription_list,
                text: getTranslation("navLinks.subscription"),
            },
            {
                path: RouteName.companyChildren.employees,
                text: getTranslation("navLinks.company"),
            },
            {
                path: RouteName.integrationChildren.torgsoft,
                text: getTranslation("navLinks.integrations"),
            },
        ],
        [language, getTranslation, getNavLinkTranslation]
    );
    const [activeDropdown, setActiveDropdown] = useState(null);

    const renderNavLink = (item, id) => {
        const routeParts = location.pathname.split("/").filter(Boolean);
        const itemRouteParts = item.path.split("/").filter(Boolean);
        const isActiveLink = routeParts[0] === itemRouteParts[0];

        // const isDropdownActive = activeDropdown === id;
        const isExistChildren = !!item.children && item.children.length > 0;
        const isDropdownActive = true;

        const isDropdownActiveAndExistChild =
            isExistChildren && isDropdownActive;

        const handleDropdownToggle = () => {
            if (isExistChildren) {
                setActiveDropdown((prev) => (prev === id ? null : id));
            }
        };

        // Check if the current route is a child link and set the active dropdown accordingly
        if (
            !isDropdownActive &&
            isExistChildren &&
            item.children.some((child) => child.path === location.pathname)
        ) {
            setActiveDropdown(id);
        }

        const handleCloseSidePanel = () =>
            isMobile && closeSidePanel(SIDE_PANELS.SIDE_MENU);
        return (
            <SideMenuLinkWrapper key={id}>
                <SideMenuLink key={id} as="span">
                    <SideMenuLinkText
                        as={Link}
                        to={item.path}
                        isactivelink={isActiveLink.toString()}
                        dropdownopen={isDropdownActiveAndExistChild.toString()}
                        onClick={handleCloseSidePanel}
                    >
                        {item.text}
                    </SideMenuLinkText>

                    {isExistChildren && (
                        <IconWrapper
                            onClick={() => {
                                return (
                                    isExistChildren && handleDropdownToggle()
                                );
                            }}
                        >
                            {/* <Icon
                                icon={IMAGES.ArrowDownIcon}
                                isdropdownopen={isDropdownActive.toString()}
                            ></Icon> */}
                        </IconWrapper>
                    )}
                </SideMenuLink>

                {isExistChildren && (
                    <Collapse in={isDropdownActive} timeout={300}>
                        <SideMenuDropdown id={`dropdown-${id}`}>
                            {item.children.map((child, childId) => {
                                const childRouteParts = child.path
                                    .split("/")
                                    .filter(Boolean);
                                const isChildActiveLink =
                                    routeParts[1] === childRouteParts[1];

                                return (
                                    <SideMenuDropdownLink
                                        key={childId}
                                        to={child.path}
                                        isactivelink={isChildActiveLink.toString()}
                                        onClick={handleCloseSidePanel}
                                    >
                                        <SideMenuDropdownLinkText>
                                            {child.text}
                                        </SideMenuDropdownLinkText>
                                    </SideMenuDropdownLink>
                                );
                            })}
                        </SideMenuDropdown>
                    </Collapse>
                )}
            </SideMenuLinkWrapper>
        );
    };

    // Render the SideMenu component
    return (
        <SlidePanel
            panelName={SIDE_PANELS.SIDE_MENU}
            direction="left"
            zIndex={97}
        >
            <SideMenuBlock>
                <LogoText
                    to={RouteName.accountantChildren.enterprise_list}
                    onClick={() =>
                        isMobile && closeSidePanel(SIDE_PANELS.SIDE_MENU)
                    }
                >
                    {getTranslation("navLinks.appName")}
                </LogoText>
                {navLinks.map((item, id) => renderNavLink(item, id))}
            </SideMenuBlock>
        </SlidePanel>
    );
});

// Export the SideMenu component as the default export
export default SideMenu;
