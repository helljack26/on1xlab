import styled from "styled-components";
import C from "../colors";

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 300px;
`;

const DropdownButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 9px 10px;
    padding-bottom: 10px;
    gap: 26px;
    background: white;
    transition: all 0.3s ease-in-out;
    font-size: 0.9em;
    border: 1px solid transparent;
    border-bottom: 2px solid ${C.borderGray};
    line-height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: relative;

    &:focus-visible {
        outline: none;
    }
    &:active,
    &:hover,
    &:focus {
        border-bottom-color: ${C.main};
    }

    &::placeholder {
        color: ${C.textBlackSecondary};
    }

    &:disabled {
        background-color: rgb(240, 240, 240);

        &:hover {
            border: 1px solid ${C.borderGray};
        }
    }

    &:disabled + .form_label__active {
        background-color: white;
    }

    @media screen and (max-width: 576px) {
        font-size: 1em;
    }
`;

const DropdownButtonLabel = styled.label`
    position: absolute;
    top: 18px;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.3s ease-out;
    pointer-events: none;
    @media screen and (max-width: 576px) {
        top: 22px;
    }
    &.up {
        transform: translateY(-220%);
        font-size: 0.8em;
        color: ${C.main};
        background-color: white;
        padding: 0px 4px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        @media screen and (max-width: 576px) {
            font-size: 0.9em;
            transform: translateY(-200%);
        }
    }
`;

const DropdownContent = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 101;
    width: 100%;
    flex-direction: column;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(224, 224, 224);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: linear-gradient(180deg, ${C.main}, ${C.hover});
    }
`;

const DropdownList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const DropdownListItem = styled.li`
    padding: 8px 12px;
    cursor: pointer;
    text-align: left;
    background-color: ${(props) =>
        props.active === "true" ? C.mainOpacity : "transparent"};
    &:hover {
        background-color: #f2f2f2;
    }
`;

const DropdownIcon = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    mask: url(${(props) => props && props.icon});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: all 0.3s ease-in-out;
    transform: scaleY(${(props) => (props.isdropdownopen === "true" ? -1 : 1)});
    background-color: ${C.textBlackMain};
    position: absolute;
    top: 10px;
    bottom: 0px;
    right: 10px;
    width: 15px;
    height: 15px;
`;

export const dropdownStyle = {
    DropdownContainer: DropdownContainer,
    DropdownButton: DropdownButton,
    DropdownButtonLabel: DropdownButtonLabel,
    DropdownContent: DropdownContent,
    DropdownList: DropdownList,
    DropdownListItem: DropdownListItem,
    DropdownIcon: DropdownIcon,
};
