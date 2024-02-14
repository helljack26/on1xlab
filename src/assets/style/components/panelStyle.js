import styled from "styled-components";

import { textStyle } from "./textStyle";
import C from "../colors";
import M from "../mixins";

// Panel
const PanelWrapperScroll = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px 24px;
    padding-bottom: ${(props) =>
        props.ishiddenfooter === "true" ? "20px" : "90px"};
    background-color: ${C.bgGray};
    overflow-y: auto;
    ${M.ScrollBarStyles};
    @media screen and (max-width: 1200px) {
        &::-webkit-scrollbar {
            width: 0px;
        }
    }
    @media screen and (max-width: 768px) {
        height: calc(100vh - 60px);
    }

    @media screen and (max-width: 500px) {
        width: 86vw;
    }
    @media screen and (max-width: 450px) {
        width: 92vw;
    }
`;

const PanelForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
`;

const PanelActionButtonsStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: fit-content;
    column-gap: 20px;
`;

const PanelHeaderWrapper = styled.div`
    align-self: flex-start;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const PanelHeaderStyle = styled(textStyle.PageMainHeaderStyle)`
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    span {
        &:first-of-type {
            font-size: 0.85em;
            color: ${C.textBlackSecondary};
            padding-right: 10px;
            display: inline-block;
        }
        @media screen and (max-width: 576px) {
            font-size: 1em;
        }
    }
`;

const PanelFooter = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 10px;
    width: calc(100% - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: white;
    box-shadow: 0 0 24px 0 ${C.shadow};

    & > div {
        padding: 10px 0px;
    }
`;

export const panelStyle = {
    PanelWrapperScroll: PanelWrapperScroll,
    PanelForm: PanelForm,
    PanelHeaderWrapper: PanelHeaderWrapper,
    PanelHeaderStyle: PanelHeaderStyle,
    PanelFooter: PanelFooter,
    PanelActionButtonsStyle: PanelActionButtonsStyle,
};
