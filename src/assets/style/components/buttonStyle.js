import styled from "styled-components";
import M from "../mixins";
import C from "../colors";
import F from "../fonts";
import IMAGES from "src/assets/images";

const ButtonPlainText = styled.button`
    width: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    border-bottom: 1px dashed transparent;
    color: ${(props) => props.customcolor && props.customcolor};

    &:hover {
        color: ${(props) => (props.customhover ? props.customhover : C.hover)};
        border-bottom: 1px dashed ${C.hover};
        border-bottom-color: ${(props) =>
            props.customhover ? props.customhover : C.hover};
    }
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px 25px;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    font-family: ${F.medium};
    font-size: 1em !important;
    pointer-events: ${(props) =>
        props.disablepointer === "true" ? "none" : "visible"};
    user-select: none;

    &:hover {
        box-shadow: 0 4px 17px 0 ${C.shadow};
    }

    i {
        width: 20px;
        height: 20px;
        background-color: ${C.main};
        transition: all 0.3s ease-in-out;
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        position: relative;
        margin-top: -2px;
    }
`;
const ButtonMainFilled = styled(Button)`
    color: whitesmoke;
    background-color: ${(props) =>
        props.customcolor ? props.customcolor : C.main};

    &:hover {
        color: white;
        background-color: ${(props) =>
            props.customhover ? props.customhover : C.hover};
    }

    &:focus,
    &:active {
        color: white;
    }
`;
const ButtonMainBorder = styled(Button)`
    border: 2px solid ${C.main};

    &:hover {
        border: 2px solid ${C.hover};
        color: ${C.main};
    }
`;
const ButtonSecondary = styled.button`
    color: ${C.textBlackSecondary};
    padding: 8px 14px;
    width: 100%;
    border-radius: 10px;
    outline: 1px solid ${C.borderGray};
    transition: all 0.3s ease-in-out;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: 6px;
    user-select: none;
    i {
        transform: scale(0.9);
        width: 20px;
        height: 20px;
        background-color: ${C.textBlackSecondary};
        transition: all 0.3s ease-in-out;
        mask-size: inherit;
        mask-repeat: no-repeat;
        mask-position: center;
        position: relative;
        margin-top: -2px;
        display: flex;
    }

    &:hover {
        outline: 1px solid ${C.hover};
        color: ${C.hover};
        i {
            background-color: ${C.hover};
        }
    }
`;
const ButtonSecondaryFilled = styled(ButtonSecondary)`
    background-color: ${C.main};
    color: white;

    &:hover {
        background-color: ${C.hover};
        color: whitesmoke;
    }
`;
const ButtonSecondaryFilledGreen = styled(ButtonSecondary)`
    background-color: ${C.green};
    color: white;
    font-size: 0.8em;

    &:hover {
        background-color: ${C.greenHover};
        outline: 1px solid ${C.greenHover};

        color: whitesmoke;
    }
`;
const ButtonSecondaryFilledRed = styled(ButtonSecondary)`
    background-color: ${C.red};
    color: white;

    &:hover {
        background-color: ${C.redHover};
        outline: 1px solid ${C.redHover};
        color: whitesmoke;
    }
`;

const ButtonSecondaryBorder = styled(ButtonSecondary)`
    outline: 1px solid ${C.borderGray};
    background-color: white;
    color: ${C.textBlackMain};
    color: ${(props) => props.customcolor && props.customcolor};

    &:hover {
        outline: 1px solid ${C.hover};

        color: ${(props) => (props.customhover ? props.customhover : C.hover)};
        i {
            background-color: ${C.hover};
        }
    }
`;

const AddButton = styled(ButtonSecondaryFilled)`
    width: fit-content;
    height: 100%;
    border-radius: 5px;
    margin-right: 4px;
    column-gap: 5px;
    outline: 1px solid transparent;
    background-color: ${C.green};

    i {
        mask: url(${IMAGES.AddIcon});
        background: white;
    }
    &:hover {
        background-color: ${C.greenHover};
        outline: 1px solid transparent;
        i {
            background: whitesmoke;
        }
    }
`;
const ExportButton = styled(ButtonMainFilled)`
    width: fit-content;
    height: 100%;
    border-radius: 5px;
    margin-right: 4px;
    column-gap: 5px;
    outline: 1px solid transparent;
    background-color: ${C.orange};

    i {
        mask: url(${IMAGES.ExportIcon});
        background: white;
        margin-right: 10px;
    }
    &:hover {
        background-color: ${C.orangeHover};
        outline: 1px solid transparent;
        i {
            background: whitesmoke;
        }
    }
`;

const SettingsButton = styled.button`
    margin-right: 5px;
    i {
        width: 20px;
        height: 20px;
        background: ${C.textBlackMain};
        transition: all 0.3s ease-in-out;
        mask: url(${IMAGES.SettingsIcon});
        mask-size: inherit;
        mask-repeat: no-repeat;
        mask-position: center;
        position: relative;
        margin-top: -2px;
        display: flex;
    }
    &:hover {
        background-color: transparent;
        outline: 1px solid transparent;
        i {
            background: ${C.hover};
        }
    }
`;

const RemoveButton = styled(SettingsButton)`
    margin-right: 0px;
    height: fit-content;
    margin-top: 7px;
    i {
        width: 25px;
        height: 25px;
        mask: url(${IMAGES.CrossIcon});
    }
`;

const ButtonGoggle = styled(ButtonMainBorder)`
    border: 2px solid ${C.borderGray};
    max-width: 400px;
    margin: 0 auto;
    @media screen and (max-width: 375px) {
        font-size: 0.9em !important;
    }
`;

const ButtonShowPassword = styled.button`
    position: absolute;
    top: 10px;
    right: 0;
    padding-top: 10px;
    padding-right: 10px;
    width: 40px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    mask: url(${(props) => props.buttonImage});
    mask-size: 22px 12px;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: all 0.3s ease-in-out;
    background: ${(props) => (props.isActive ? C.main : C.textBlackSecondary)};

    &:hover {
        background: ${C.hover};
    }
`;

const ButtonTableHeaderRound = styled.button`
    padding: 12px;
    background-color: rgba(255, 255, 255, 0.3411764706) !important;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: rgba(0, 0, 0, 0.54);
    outline: 1px solid transparent;

    i {
        ${M.MaskIcon};
    }

    &:hover {
        outline: 1px solid ${C.hover};
        color: ${C.hover};
        i {
            background-color: ${C.hover};
        }
    }
`;

const BurgerButton = styled.button`
    position: relative;
    width: 35px;
    height: 24px;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    position: absolute;
    z-index: 97;
    top: 24px;
    left: 24px;
    display: ${({ open }) => (open ? "none" : "inline-block")};

    &::before {
        content: "";
        background-color: #ffffff57;
        position: absolute;
        top: -14px;
        left: -9px;
        bottom: 0;
        right: 0;
        width: 52px;
        height: 52px;
        display: ${({ open }) => (open ? "inline-block" : "none")};
        border-radius: 50%;
    }
    @media screen and (max-width: 1200px) {
        &::before {
            border: 1px solid ${C.main};
            top: -15px;
        }
    }
    @media screen and (max-width: 768px) {
        position: relative;
        top: auto;
        left: auto;
        &::before {
            background-color: ${C.main};
        }
    }
    span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: ${({ open }) => (open ? C.orange : "white")};
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        border-radius: 2px;
        @media screen and (max-width: 768px) {
            background: ${({ open }) => (open ? C.orange : C.main)};
        }
    }

    span:nth-child(1) {
        top: ${({ open }) => (open ? "10px" : "0px")};
        width: ${({ open }) => (open ? "0%" : "100%")};
        left: ${({ open }) => (open ? "50%" : "0")};
    }

    span:nth-child(2) {
        top: ${({ open }) => (open ? "10px" : "10px")};
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    span:nth-child(3) {
        top: ${({ open }) => (open ? "10px" : "10px")};
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }

    span:nth-child(4) {
        top: ${({ open }) => (open ? "10px" : "20px")};
        width: ${({ open }) => (open ? "0%" : "100%")};
        left: ${({ open }) => (open ? "50%" : "0")};
    }
    @media screen and (max-width: 1200px) {
        display: inline-block;
    }
`;

export const buttonStyle = {
    ButtonPlainText: ButtonPlainText,
    ButtonMainFilled: ButtonMainFilled,
    ButtonMainBorder: ButtonMainBorder,

    ButtonSecondaryFilled: ButtonSecondaryFilled,
    ButtonSecondaryFilledGreen: ButtonSecondaryFilledGreen,
    ButtonSecondaryFilledRed: ButtonSecondaryFilledRed,
    ButtonSecondaryBorder: ButtonSecondaryBorder,
    AddButton: AddButton,
    SettingsButton: SettingsButton,
    RemoveButton: RemoveButton,
    ExportButton: ExportButton,
    ButtonGoggle: ButtonGoggle,
    ButtonShowPassword: ButtonShowPassword,
    ButtonTableHeaderRound: ButtonTableHeaderRound,
    BurgerButton: BurgerButton,
};
