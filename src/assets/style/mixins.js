import styled, { css } from "styled-components";

import C from "./colors";
import F from "./fonts";

const ScrollBarStyles = css`
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(224, 224, 224);
        z-index: 10;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: linear-gradient(180deg, ${C.main}, ${C.hover});
    }
`;

const BoxShadowStyle = css`
    box-shadow: 0 4px 8px 0 rgba(0, 89, 172, 0.2);
`;

const MaskIcon = css`
    width: 20px;
    height: 20px;
    background-color: ${C.textBlackMain};
    transition: all 0.3s ease-in-out;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    position: relative;
    display: flex;
`;

const M = {
    ScrollBarStyles: ScrollBarStyles,
    BoxShadowStyle: BoxShadowStyle,
    MaskIcon: MaskIcon,
};

export default M;
