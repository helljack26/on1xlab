import styled from "styled-components";
import C from "../../../assets/style/colors";
import { containersStyle } from "../../../assets/style/components/containersStyle";

const Header = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 6px;
    padding-right: 24px;
    column-gap: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 1200px) {
        padding-left: 60px;
    }
    @media screen and (max-width: 992px) {
        padding-right: 6px;
    }
    @media screen and (max-width: 900px) {
        column-gap: 10px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const UserProfileWrapper = styled.div`
    height: 100%;
    position: relative;
`;

const ProfileWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const UserProfileButton = styled.button`
    padding: 0 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: 10px;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -8px;
        border-width: 0 8px 8px;
        border-style: solid;
        border-color: transparent transparent ${C.bgGray};
        transition: all 0.3s ease-in-out;
        opacity: ${(props) => (props.isPopupVisible ? 1 : 0)};
    }
    &:hover {
        background-color: ${C.hoverOpacity};
    }

    @media screen and (max-width: 992px) {
        padding: 0px 10px;
    }
`;

const ArrowDown = styled.span`
    content: "";
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: ${C.bgGray} transparent transparent;
    transition: all 0.3s ease-in-out;
    margin-left: 2px;
    opacity: 0.8;
`;

const UserProfileIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 50%;
    background-color: ${C.bgGray};
`;
const UserProfileImg = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
`;
const UserProfileIconImg = styled.span`
    color: white;

    width: 27px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    mask: url(${(props) => props.icon});
    background: ${(props) => (props.bgcolor ? props.bgcolor : C.main)};
    mask-size: 25px 25px;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: all 0.3s ease-in-out;
    margin: 5px;
    margin-top: 3px;
`;

const UserProfileText = styled.span`
    color: white;
    user-select: none;
    white-space: nowrap;
    @media screen and (max-width: 992px) {
        font-size: 0.9em;
    }
`;

// Colored
const ProfileButton = styled.button`
    height: fit-content;
    padding: 3px 6px;
    padding-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: 10px;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.bgcolor};
    position: relative;
    &:hover {
        filter: brightness(1.2);
    }

    &::before {
        content: "";
        position: absolute;
        bottom: -23px;
        left: 50%;
        margin-left: -8px;
        border-width: 0 8px 8px;
        border-style: solid;
        border-color: transparent transparent ${C.bgGray};
        transition: all 0.3s ease-in-out;
        opacity: ${(props) => (props.isPopupVisible ? 1 : 0)};
    }
`;

const ProfileIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 50%;
    background-color: ${C.whiteOpacity};
    padding: 6px;
`;
const ProfileIconImg = styled.span`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    mask: url(${(props) => props.icon});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: all 0.3s ease-in-out;
    background: white;

    margin-top: -2px;
`;

const ProfileText = styled.span`
    font-size: 0.9em;
    color: white;
    user-select: none;
`;

export const HeaderStyle = {
    Header: Header,

    UserProfileWrapper: UserProfileWrapper,
    UserProfileButton: UserProfileButton,
    ArrowDown: ArrowDown,
    UserProfileIcon: UserProfileIcon,
    UserProfileImg: UserProfileImg,
    UserProfileIconImg: UserProfileIconImg,
    UserProfileText: UserProfileText,
    ProfileWrapper: ProfileWrapper,
    ProfileButton: ProfileButton,
    ProfileIcon: ProfileIcon,
    ProfileIconImg: ProfileIconImg,
    ProfileText: ProfileText,
    ...containersStyle,
};
