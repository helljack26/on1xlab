import styled from "styled-components";
import C from "../../../assets/style/colors";
import { buttonStyle } from "../../../assets/style/components/buttonStyle";
const PanelContainer = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: fit-content;
    z-index: ${(props) => props.zIndex || 100};
    ${(props) => (props.direction === "right" ? "right: 0;" : "left: 0;")}
    box-shadow: ${(props) =>
        props.direction === "right"
            ? "rgba(0, 0, 0, 0.318)"
            : "rgba(0, 0, 0, 0)"}  0px 0px 10px;

    translate: none;
    rotate: none;
    scale: none;
    transform: ${({ isOpen, direction }) =>
        isOpen
            ? "translate(0px, 0px)"
            : direction === "left"
            ? "translate(-100%, 0px)"
            : "translate(100%, 0px)"};

    @media screen and (max-width: 768px) {
        height: calc(100vh - 60px);
        bottom: 60px;
    }
`;

// Styled component for the close button
const PanelCloseButton = styled.button`
    position: fixed;
    top: 30px; // Adjust the top position as needed
    ${(props) =>
        props.direction === "left"
            ? "left: -100%;"
            : "left: -43px;"} // Adjust the right position as needed for "right" direction
        display: inline-block;

    width: 30px;
    height: 20px;
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    z-index: ${(props) => props.zIndex - 1 || 100};

    &::before {
        content: "";
        background-color: ${C.main};
        position: absolute;
        top: -14px;
        left: -9px;
        bottom: 0;
        right: 0;
        width: 52px;
        height: 52px;
        display: inline-block;
        border-top-left-radius: 27px;
        border-bottom-left-radius: 27px;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        &::before {
            background-color: ${C.hover};
        }
        span {
            background-color: ${C.orangeHover};
        }
    }

    @media screen and (max-width: 576px) {
        top: auto;
        bottom: 150px;
    }
    // Adjust the right position as needed for "right" direction
    @media screen and (max-width: 450px) {
        ${(props) =>
            props.direction === "left" ? "left: 100%;" : "left: 13px;"}
        transform: rotate(180deg);
    }

    span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: ${C.orange}; // Adjust the color as needed
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: all 0.3s ease-in-out;
        border-radius: 2px;
    }

    span:nth-child(1) {
        top: 10px;
        width: 0%;
        left: 50%;
    }

    span:nth-child(2) {
        top: 10px;
        transform: rotate(45deg);
    }

    span:nth-child(3) {
        top: 10px;
        transform: rotate(-45deg);
    }

    span:nth-child(4) {
        top: 0px;
        width: 0%;
        left: 50%;
    }
`;

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.32);
    width: 100vw;
    height: 100vh;

    z-index: ${(props) => props.zIndex - 2 || 100};

    backdrop-filter: blur(4px);
    display: none;

    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        height: calc(100vh - 60px);
        bottom: 50px;
    }
`;

export const SlidePanelStyle = {
    PanelContainer: PanelContainer,
    PanelCloseButton: PanelCloseButton,
    BackgroundOverlay: BackgroundOverlay,
    ...buttonStyle,
};
