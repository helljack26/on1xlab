import styled from "styled-components";
import C from "../../../assets/style/colors";

// Styled Components
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;
const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    height: fit-content;
    text-align: center;
    z-index: 1;
`;

const ModalIcon = styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;
`;

const ModalHeader = styled.h2`
    margin-bottom: 10px;
`;

const ModalText = styled.p`
    margin-bottom: 20px;
`;

const CloseButton = styled.button`
    background: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const ModalButtonsRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: fit-content;
    column-gap: 30px;
    margin: 0 auto;
`;

const ModalSuccessfull = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    font-size: 1.5em;
    color: ${C.main};
`;

export const modalWindow = {
    ModalWrapper: ModalWrapper,
    ModalOverlay: ModalOverlay,
    ModalContainer: ModalContainer,
    ModalIcon: ModalIcon,
    ModalHeader: ModalHeader,
    ModalText: ModalText,
    CloseButton: CloseButton,
    ModalButtonsRow: ModalButtonsRow,
    ModalSuccessfull: ModalSuccessfull,
};
