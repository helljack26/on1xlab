// Import necessary libraries and components
import React, { useEffect, useState } from "react";

// Store
import { observer } from "mobx-react-lite";

// Components
import Burger from "../Buttons/Burger/Burger";
import Clock from "./Clock/Clock";
import UserProfile from "./UserProfile/UserProfile";
import TariffProfile from "./TariffProfile/TariffProfile";
import InviteEmpoyees from "./InviteEmpoyees/InviteEmpoyees";

// Style
import { HeaderStyle } from "./HeaderStyle";
const { Header } = HeaderStyle;

// HeaderBar component definition
const HeaderBar = observer(() => {
    // Render the HeaderBar component
    return (
        <Header>
            {/* Burger button component */}
            <Burger />

            {/* Clock component */}
            <Clock />

            {/* UserProfile component */}
            <UserProfile />

            {/* TariffProfile component */}
            <TariffProfile />

            {/* InviteEmpoyees component */}
            <InviteEmpoyees />
        </Header>
    );
});

export default HeaderBar;
