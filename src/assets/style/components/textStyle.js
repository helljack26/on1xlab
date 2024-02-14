import styled from "styled-components";
import C from "../colors";
import F from "../fonts";
import { Link } from "react-router-dom";

const HeaderText = styled.h1`
    font-size: 2em;
    text-align: ${(props) => (props.center ? "center" : "left")};

    @media screen and (max-width: 576px) {
        font-size: 1.7em;
    }
`;
const PageMainHeaderStyle = styled.h1`
    font-size: 1.7em;
    text-align: ${(props) => (props.center ? "center" : "left")};
    font-weight: 600;
    color: ${(props) => props.white && "white"};
    @media screen and (max-width: 992px) {
        font-size: 1.9em;
    }
    @media screen and (max-width: 576px) {
        font-size: 1.7em;
    }
`;
const PageMainHeaderText = styled.div``;

const BlockHeader = styled.span`
    font-family: ${F.medium};
    font-weight: 100;
    font-size: 1.2em;
    color: ${(props) => (props.white ? "white" : C.main)};
    padding-left: 5px;
    padding-bottom: 5px;
    margin-bottom: 32px;
    display: inline-block;
    content: " ";
    border-bottom: 1px solid ${C.borderGray};
    border-bottom: ${(props) => props.empty === "true" && "none"};
    width: 100%;
    @media screen and (max-width: 992px) {
        display: ${(props) => props.empty === "true" && "none"};
    }
`;

const BoldGrayText = styled.span`
    font-family: ${F.medium};
    color: ${C.textBlackSecondary};
`;

const ErrorText = styled.span`
    color: ${C.red};
    padding: 6px 10px;

    width: 100%;
    font-size: 0.9em;
    display: inline-block;
    text-align: ${(props) => (props.center ? "center" : "left")};
`;

const ErrorTextCenter = styled(ErrorText)`
    text-align: center;
    font-size: 1em;
    padding: 0px 10px;
    padding-top: 10px;
    padding-bottom: 20px;
`;

const LinkStyle = styled(Link)`
    font-family: ${F.medium};
    color: ${C.main};
    transition: all 0.3s ease-in-out;
    width: fit-content;
    &:hover {
        text-decoration: underline;
        color: ${C.hover};
        cursor: pointer;
    }
`;

export const textStyle = {
    HeaderText: HeaderText,
    PageMainHeaderStyle: PageMainHeaderStyle,
    PageMainHeaderText: PageMainHeaderText,
    BlockHeader: BlockHeader,
    BoldGrayText: BoldGrayText,
    ErrorText: ErrorText,
    ErrorTextCenter: ErrorTextCenter,
    LinkStyle: LinkStyle,
};
