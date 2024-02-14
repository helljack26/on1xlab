import React from "react";
import { makeAutoObservable } from "mobx";

class MobileStore {
    isMobile = window.innerWidth <= 1200; // Set initial value based on window width

    constructor() {
        makeAutoObservable(this);

        // Add a resize event listener to update isMobile state
        window.addEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        this.isMobile = window.innerWidth <= 1200;
    };
}

const mobileStore = new MobileStore();

export const mobileStoreContext = React.createContext(mobileStore);
export const useMobileStore = () => React.useContext(mobileStoreContext);

export default useMobileStore;
