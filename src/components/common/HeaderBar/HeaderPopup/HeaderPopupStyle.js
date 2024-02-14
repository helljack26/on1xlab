import styled from "styled-components";
import C from "../../../../assets/style/colors";
import { Link } from "react-router-dom";

// Popup
const PopupContainer = styled.div`
    opacity: 0;
    padding: 16px;
    background-color: ${C.bgGray};
    border: 1px solid #ccc;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 8px;
    min-width: 450px;
    z-index: 10;
    display: none;
`;

const ProfileLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 10px;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    outline: 2px solid white;
    background-color: white;
    &:hover {
        outline: 2px solid ${C.hoverOpacity};
        color: ${C.hover};
        cursor: pointer;
    }
`;
const EmployeesLink = styled(ProfileLink)`
    justify-content: center;
    padding: 6px 30px;
    div {
        width: 100%;
    }
`;

const ProfileLinkRow = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileLinkColumn = styled.div`
    margin-left: 10px;
`;

const ProfileLinkName = styled.span`
    padding-bottom: 5px;
    font-weight: bold;
`;

const ProfileLinkSecondary = styled.div`
    color: ${C.textBlackSecondary};
    font-size: 0.9em;
    text-decoration: ${(props) => props.decoration && props.decoration};
    display: block;
`;

const ProfileLinkButton = styled.span`
    font-size: 0.8em;
    border-radius: 10px;
    outline: 1px solid ${C.borderGray};
    height: inherit;
    padding: 4px 10px;
    font-weight: bold;
    background-color: ${(props) => props.bgcolor && props.bgcolor};
    color: ${(props) => props.tcolor && props.tcolor};
    transition: all 0.3s ease-in-out;
    user-select: none;

    &:hover {
        filter: brightness(1.2);
        color: ${(props) => props.tcolor && props.tcolor};
        cursor: pointer;
    }
`;

const PopupTwoColumn = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    column-gap: 16px;
    margin-top: 14px;

    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
    }
`;

const PopupThreeColumn = styled(PopupTwoColumn)`
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
    }
`;
const PopupOneTwoColumn = styled(PopupTwoColumn)`
    grid-template-columns: 1.2fr 2fr;

    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
    }
`;

const PopupLinkTopIcon = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    background-color: white;
    border-radius: 10px;
    padding: 8px 10px;
    font-size: 0.8em;
    outline: 2px solid white;

    span {
        text-align: center;
    }
    &:hover {
        outline: 2px solid ${C.hoverOpacity};
        i {
            background: ${C.hover};
        }
        span {
            color: ${C.hover};
        }
    }
`;
export const HeaderPopupStyle = {
    PopupContainer: PopupContainer,

    ProfileLink: ProfileLink,
    EmployeesLink: EmployeesLink,
    ProfileLinkRow: ProfileLinkRow,
    ProfileLinkColumn: ProfileLinkColumn,
    ProfileLinkName: ProfileLinkName,
    ProfileLinkSecondary: ProfileLinkSecondary,
    ProfileLinkButton: ProfileLinkButton,
    PopupTwoColumn: PopupTwoColumn,
    PopupThreeColumn: PopupThreeColumn,
    PopupOneTwoColumn: PopupOneTwoColumn,
    PopupLinkTopIcon: PopupLinkTopIcon,
};
