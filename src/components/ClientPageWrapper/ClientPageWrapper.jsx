import React from "react";

// Store
import { observer } from "mobx-react-lite";
// Components
import LoadingSpinner from "src/components/common/LoadingSpinner/LoadingSpinner";
import MobileMenu from "src/components/common/MobileMenu/MobileMenu";
import HeaderBar from "src/components/common/HeaderBar/HeaderBar";
import Footer from "src/components/common/Footer/Footer";
// Style
// import { baseStyle } from "../../assets/style/baseStyle";
// const { Container, ContainerColumn, MainContent } = baseStyle;

import IMAGES from "src/assets/images";
import { useLocation } from "react-router-dom";
import RouteName from "src/assets/routeName";

const ClientPageWrapper = observer(({ scriptList = [], children }) => {
    const location = useLocation();
    const pagePath = location.pathname;

    return (
        <>
            <div id="body_wrapper" className="body_mobile">
                <MobileMenu />
                <div id="body_mobile_block">
                    <LoadingSpinner />
                    <HeaderBar />

                    {children}
                </div>
            </div>
            <Footer scriptList={scriptList} />
        </>
    );
});

export default ClientPageWrapper;
