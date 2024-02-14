import { createContext, useContext } from "react";
import { observable, action, makeObservable } from "mobx";
import SIDE_PANELS from "../assets/sidePanelName";

const generatePanelObject = () => {
    // const panelThatOpen = SIDE_PANELS.CONTRAHENT_PANEL;
    const panelThatOpen = null;
    const panelObject = {};
    Object.values(SIDE_PANELS).forEach((panelName) => {
        panelObject[panelName] = { isOpen: false, zIndex: 0 }; // Initialize with isOpen and zIndex
    });
    return panelObject;
};

class SidePanel {
    panels = generatePanelObject();

    constructor() {
        makeObservable(this, {
            panels: observable,
            openSidePanel: action,
            closeSidePanel: action,
        });
    }

    openSidePanel = (panelName, zIndex) => {
        // Check if the panel to be opened is the 'sideMenuPanel'
        if (panelName === SIDE_PANELS.SIDE_MENU) {
            // Open the specified panel without closing others
            this.panels[panelName] = { isOpen: true, zIndex };
        } else {
            // Close all other panels except 'sideMenuPanel'
            Object.keys(this.panels).forEach((name) => {
                if (name !== SIDE_PANELS.SIDE_MENU) {
                    this.panels[name] = { ...this.panels[name], isOpen: false };
                }
            });

            // Open the specified panel
            this.panels[panelName] = { isOpen: true, zIndex };
        }
    };

    closeSidePanel = (panelName) => {
        // Close the specified panel
        this.panels[panelName] = { ...this.panels[panelName], isOpen: false };
    };
}

const SidePanelStore = new SidePanel();

export const SidePanelStoreContext = createContext(SidePanelStore);
export const useSidePanelStore = () => useContext(SidePanelStoreContext);

export default useSidePanelStore;
