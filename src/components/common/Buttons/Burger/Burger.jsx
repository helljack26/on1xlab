import React, { useState, useEffect } from "react";

// Store
import { observer } from "mobx-react-lite";
import { useSidePanelStore } from "../../../../store/sidePanelStore"; // Import the side panel store
// Variables
import SIDE_PANELS from "../../../../assets/sidePanelName";
// Style
import { baseStyle } from "../../../../assets/style/baseStyle";
const { BurgerButton } = baseStyle;

const Burger = observer(() => {
    const sidePanelStore = useSidePanelStore(); // Use the side panel store
    const [isButtonClickable, setIsButtonClickable] = useState(true);

    const handleToggleMenu = () => {
        if (isButtonClickable) {
            // Toggle the sideMenu state in the global store
            if (sidePanelStore.panels[SIDE_PANELS.SIDE_MENU].isOpen) {
                // If the side menu is currently open, close it
                sidePanelStore.closeSidePanel(SIDE_PANELS.SIDE_MENU);
            } else {
                // If the side menu is currently closed, open it
                sidePanelStore.openSidePanel(SIDE_PANELS.SIDE_MENU);
            }
            // Disable the button for 0.4 seconds
            setIsButtonClickable(false);
        }
    };

    useEffect(() => {
        // Enable the button after 0.4 seconds
        const enableButtonTimeout = setTimeout(() => {
            setIsButtonClickable(true);
        }, 400);

        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(enableButtonTimeout);
    }, [isButtonClickable]);

    return (
        <BurgerButton
            open={sidePanelStore.panels[SIDE_PANELS.SIDE_MENU].isOpen}
            onClick={handleToggleMenu}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </BurgerButton>
    );
});

export default Burger;
