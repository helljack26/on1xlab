import styled from "styled-components";

import C from "../colors";
import M from "../mixins";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: ${(props) => (props.scroll === "true" ? "100vh" : "100%")};
    overflow-y: ${(props) => (props.scroll === "true" ? "hidden" : "auto")};
    background-color: white;
    overflow-y: auto;
    background: url(${(props) => props.backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-left: 250px;
    padding-right: 10px;
    overflow-x: hidden;
    @media screen and (max-width: 1200px) {
        padding: 0px 16px;
    }
    @media screen and (max-width: 768px) {
        padding-top: 16px;
        background-repeat: repeat-y;
        overflow-y: auto;
    }
`;

const ContainerColumn = styled.div`
    width: 100%;
    height: 100vh !important;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: min-content min-content 1fr;

    @media screen and (max-width: 768px) {
        height: fit-content !important;
        padding-bottom: 100px;
    }
`;

const MainContent = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 6px;
    padding-right: 0;
    padding-top: 0;
    overflow: ${(props) => (props.ishidden === "true" ? "hidden" : "visible")};
    @media screen and (max-width: 1200px) {
        padding: 0;
    }
`;
const TableWrapper = styled.div`
    overflow: hidden;
`;

const MainContentWrapper = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 15px 15px 20px;
    margin-bottom: 10px;
`;

const ContainerTwoColumn = styled.div`
    width: 100%;
    display: grid;
    column-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    background-color: ${(props) =>
        props.istransparent === "true" ? "transparent" : "white"};

    padding: ${(props) => props.istransparent !== "true" && "16px"};
    padding-bottom: 0;
    border-radius: 10px;
`;

const WhiteBgBlock = styled.div`
    background-color: white;
    width: 100%;
    padding: 16px;
    padding-bottom: 0;
    border-radius: 10px;
    ${M.BoxShadowStyle}
`;

const TwoColumnInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    column-gap: 16px;

    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const Icon = styled.i`
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    mask: url(${(props) => props.icon});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: all 0.3s ease-in-out;
    background: ${(props) =>
        props.bgcolor ? props.bgcolor : C.textBlackSecondary};
`;

const GridWrapper = styled.div`
    padding: 16px;
    background-color: ${C.bgGray};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-top: 10px;
`;

const GridFourColumn = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 16px;
    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
    }
`;

const GridFiveColumn = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    gap: 16px;
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const PageMainHeaderWrapper = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    min-height: 64px;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const containersStyle = {
    Container: Container,
    ContainerColumn: ContainerColumn,
    MainContent: MainContent,
    TableWrapper: TableWrapper,
    MainContentWrapper: MainContentWrapper,
    ContainerTwoColumn: ContainerTwoColumn,
    WhiteBgBlock: WhiteBgBlock,

    ImageContainer: ImageContainer,
    TwoColumnInput: TwoColumnInput,
    Icon: Icon,
    GridWrapper: GridWrapper,
    GridFourColumn: GridFourColumn,
    GridFiveColumn: GridFiveColumn,
    PageMainHeaderWrapper: PageMainHeaderWrapper,
};
