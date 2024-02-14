import styled from "styled-components";
import C from "../colors";

const CardBlock = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 16px;
    border-radius: 10px;
    row-gap: 10px;
`;

const CardLine = styled.span`
    width: 100%;
    background-color: ${C.borderGray};
    height: 2px;
    display: inline-block;
    border-radius: 1px;
`;
const CardHeader = styled.span`
    font-size: 1.4em;
    margin-bottom: ${(props) =>
        props.marginbottom && props.marginbottom + "px"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    text-align: center;
    width: 100%;
`;
const CardRowStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    column-gap: 10px;
`;
const CardRowTitle = styled.span`
    color: ${C.textBlackSecondary};
`;
const CardRowValue = styled.span``;

export const cardStyle = {
    CardBlock: CardBlock,
    CardHeader: CardHeader,
    CardLine: CardLine,
    CardRowStyle: CardRowStyle,
    CardRowTitle: CardRowTitle,
    CardRowValue: CardRowValue,
};
