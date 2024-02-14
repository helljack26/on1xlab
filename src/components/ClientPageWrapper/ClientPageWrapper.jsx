import React from "react";

// Store
import { observer } from "mobx-react-lite";
// Components
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import SideMenu from "../common/SideMenu/SideMenu";
import HeaderBar from "../common/HeaderBar/HeaderBar";
import TabNavigation from "../common/TabNavigation/TabNavigation";
import ProfilePanel from "../ProfilePanel/ProfilePanel";
// import InviteEmployeePanel from "../InviteEmployeePanel/InviteEmployeePanel";
import EnterprisePanel from "../EnterprisePanel/EnterprisePanel";
import MobileBottomNavigation from "../common/MobileBottomNavigation/MobileBottomNavigation";
// Helpers
// import useImageDarkness from "../../hooks/useImageDarkness";
// Style
import { baseStyle } from "../../assets/style/baseStyle";

import IMAGES from "src/assets/images";
import { useLocation } from "react-router-dom";
import RouteName from "src/assets/routeName";
const { Container, ContainerColumn, MainContent } = baseStyle;

const ClientPageWrapper = observer(({ scroll = false, children }) => {
    const location = useLocation();
    const pagePath = location.pathname;
    // const handleDarknessChange = (isDark) => {
    //     console.log(isDark ? "Dark image" : "Light image");
    // };

    // useImageDarkness(
    //     "http://localhost/uploads/users/avatar/c497399c9d8f131faa122bc8c1c9d514.jpg",
    //     handleDarknessChange
    // );

    return (
        <>
            <LoadingSpinner />
            <Container backgroundImage={IMAGES.MainBg} scroll={`${scroll}`}>
                {/* Side menu */}
                <SideMenu />
                <ContainerColumn>
                    {/* HeaderBar */}
                    <HeaderBar />

                    {/* TabNavigation */}
                    <TabNavigation />

                    {/* Profile panel */}
                    <ProfilePanel />

                    {/* Invite employee panel */}
                    {/* <InviteEmployeePanel /> */}

                    {/* Enterprise panel */}
                    {pagePath.includes(
                        RouteName.accountantChildren.enterprise_list
                    ) && <EnterprisePanel />}

                    {/* TabNavigation */}
                    <MobileBottomNavigation />

                    {/* Main content */}
                    <MainContent ishidden={scroll.toString()}>
                        {children}
                    </MainContent>
                </ContainerColumn>
            </Container>
        </>
    );
});

export default ClientPageWrapper;
