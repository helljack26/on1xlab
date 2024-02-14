import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Store
import { observer } from "mobx-react-lite";
import { useAuthStore } from "../../../../store/authStore";
import { useMultilanguageStore } from "../../../../store/MultilanguageStore";

// Variables
import IMAGES from "../../../../assets/images";

// Style
import { baseStyle } from "../../../../assets/style/baseStyle";
const { ButtonSecondaryBorder } = baseStyle;

const LogoutButton = styled(ButtonSecondaryBorder)`
    i {
        mask: url("${IMAGES.ExitIcon}");
    }
`;

//
const Logout = observer(() => {
    const { language, getTranslation } = useMultilanguageStore();
    const { logoutUser } = useAuthStore();

    return (
        <LogoutButton type="button" onClick={logoutUser}>
            <i></i>
            <span>{getTranslation("common.exit")}</span>
        </LogoutButton>
    );
});

export default Logout;
