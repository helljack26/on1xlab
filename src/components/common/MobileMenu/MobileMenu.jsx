import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Collapse from "@mui/material/Collapse";

// Variables
import SIDE_PANELS from "../../../assets/sidePanelName";
import RouteName from "../../../assets/routeName";

// Import stores
import { useSidePanelStore } from "../../../store/sidePanelStore"; // Store for managing side panels
// Component
import SlidePanel from "../SlidePanel/SlidePanel";

// Functional component for the MobileMenu
const MobileMenu = observer(() => {
    // Hook into SidePanelStore for handling side panel state
    const { closeSidePanel } = useSidePanelStore();

    const handleCloseSidePanel = () => closeSidePanel(SIDE_PANELS.SIDE_MENU);
    // Render the MobileMenu component
    return (
        <SlidePanel
            panelName={SIDE_PANELS.SIDE_MENU}
            direction="left"
            zIndex={97}
        >
            {/* <MobileMenuBlock> */}
            <div id="mobile_menu">
                {/* Close  */}
                <button
                    type="button"
                    className="mobile_menu_close"
                    onClick={handleCloseSidePanel}
                >
                    <span></span>
                    <span></span>
                </button>

                {/* Links  */}
                <nav>
                    <a href="/" className="mobile_menu_nav_link_main">
                        Головна
                    </a>
                    <a href="/services" className="mobile_menu_nav_link_main">
                        Послуги
                    </a>
                    <a href="/projects" className="mobile_menu_nav_link_main">
                        Проекти
                    </a>
                    <a href="/blog" className="mobile_menu_nav_link_main">
                        Блог
                    </a>
                    <a href="/contacts" className="mobile_menu_nav_link_main">
                        Контакти
                    </a>
                </nav>

                {/* Stars bg */}
                <div id="stars-container">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
            </div>
        </SlidePanel>
    );
});

// Export the MobileMenu component as the default export
export default MobileMenu;
