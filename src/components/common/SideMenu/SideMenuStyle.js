import styled from "styled-components";
import C from "../../../assets/style/colors";
import F from "../../../assets/style/fonts";
import { buttonStyle } from "../../../assets/style/components/buttonStyle";
import { containersStyle } from "../../../assets/style/components/containersStyle";
import { Link } from "react-router-dom";

const SideMenuBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    height: 100vh;
    width: 250px;
    padding: 0 16px;
    padding-top: 20px;

    /* Right line */
    &::after {
        content: "";
        position: absolute;
        top: 6px;
        bottom: 6px;
        right: 0px;
        height: calc(100% - 12px);
        width: 2px;
        border-radius: 2px;
        display: inline-block;
        background-color: ${C.borderGray};
        opacity: 0.3;
    }

    @media screen and (max-width: 1200px) {
        padding-top: 20px;
        background-color: #f3f5f7;
        width: 350px;
        align-items: flex-end;
    }
    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;
const LogoText = styled(Link)`
    font-size: 2em;
    font-family: ${F.medium};
    font-weight: bold;
    margin-bottom: 20px;
    user-select: none;
    color: darkgray;

    @media screen and (max-width: 1200px) {
        font-size: 2.3em;
        text-align: right;
        width: fit-content;
        padding-right: 10px;
        margin-bottom: 20px;
        color: ${C.main};
    }
`;
const SideMenuLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    opacity: ${(props) => (props.hiddenlink === "true" ? 0 : 1)};
    margin-top: ${(props) => (props.hiddenlink === "true" ? "20px" : "0px")};
`;
const SideMenuLink = styled(Link)`
    width: 100%;
    height: fit-content;
    display: inline-block;
    position: relative;
`;

const SideMenuLinkText = styled.span`
    display: inline-block;
    width: 100%;
    padding: 10px 0px;
    padding-left: 20px;
    transition: all 0.3s ease;
    border-radius: 10px;
    border-bottom-left-radius: ${(props) =>
        props.dropdownopen === "true" ? `0px` : "10px"};
    border-bottom-right-radius: ${(props) =>
        props.dropdownopen === "true" ? `0px` : "10px"};
    color: ${(props) => (props.isactivelink === "true" ? `white` : "white")};

    background-color: ${(props) =>
        props.isactivelink === "true"
            ? "rgba(255, 255, 255, .35)"
            : "transparent"};
    font-size: 1.3em;

    &:hover {
        background-color: ${C.hoverOpacity};
        color: white;
    }
    @media screen and (max-width: 1200px) {
        font-size: 1.6em;
        background-color: ${(props) =>
            props.isactivelink === "true" ? C.mainOpacity : "transparent"};
        color: ${(props) =>
            props.isactivelink === "true" ? C.main : C.textBlackMain};
        font-weight: ${(props) => props.isactivelink === "true" && "bold"};
    }
`;
const SideMenuDropdown = styled.div`
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #ffffff24;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
        background-color: white;
    }
`;
const SideMenuDropdownLink = styled(Link)`
    font-size: 17px;
    margin-bottom: 0;
    pointer-events: ${(props) =>
        props.isactivelink === "true" ? "none" : "visible"};
    font-size: 2em;
    font-family: ${F.medium};
    font-weight: bold;
    margin-bottom: 20px;
    user-select: none;
    color: darkgray;
`;
const SideMenuDropdownLinkText = styled(SideMenuLinkText)`
    border-radius: 0;
    font-size: 17px;
`;

const SideMenuFooter = styled.div`
    position: absolute;
    left: 0px;
    bottom: 20px;
    right: 0px;
`;
const IconWrapper = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0;

    padding-right: 10px;
    padding-left: 10px;
    padding-top: 14px;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        i {
            background-color: ${C.hover};
        }
    }
`;

const Icon = styled(containersStyle.Icon)`
    transition: all 0.3s ease-in-out;
    transform: scaleY(${(props) => (props.isdropdownopen === "true" ? -1 : 1)});
    background-color: white;

    width: 15px;
    height: 15px;
`;

export const SideMenuStyle = {
    SideMenuBlock: SideMenuBlock,
    LogoText: LogoText,
    SideMenuLinkWrapper: SideMenuLinkWrapper,
    SideMenuLink: SideMenuLink,
    SideMenuLinkText: SideMenuLinkText,
    SideMenuDropdown: SideMenuDropdown,
    SideMenuDropdownLink: SideMenuDropdownLink,
    SideMenuDropdownLinkText: SideMenuDropdownLinkText,

    SideMenuFooter: SideMenuFooter,
    ...buttonStyle,
    ...containersStyle,
    IconWrapper: IconWrapper,
    Icon: Icon,
};
