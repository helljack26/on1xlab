import styled, { css } from "styled-components";
import C from "../colors";
import IMAGES from "src/assets/images";

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 28px;
    height: fit-content;
    width: 100%;
`;

const Label = styled.label`
    position: absolute;
    top: 18px;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.3s ease-out;
    pointer-events: none;
    font-size: 1.1em;
    color: ${C.textBlackSecondary};
    @media screen and (max-width: 576px) {
        top: 22px;
    }

    &.up {
        transform: translateY(-235%);
        font-size: 0.85em;
        color: ${(props) => props.isFocused && C.main};

        @media screen and (max-width: 576px) {
            font-size: 0.9em;
            transform: translateY(-240%);
        }
    }
`;

const baseInputFieldStyles = css`
    width: 100%;
    display: flex;
    align-items: center;

    background: white;
    font-size: 1.1em;
    border: 1px solid ${C.mainOpacity};
    border-bottom: 2px solid ${C.borderGray};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    line-height: 120%;
`;

// Specific styles for InputField
const InputField = styled.input`
    ${baseInputFieldStyles};
    padding: 8px 10px;
    transition: all 0.3s ease-in-out;

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
`;

// Specific styles for InputFieldDisabled
const InputFieldDisabled = styled.span`
    ${baseInputFieldStyles}
    padding: 6px 10px;
    border: 1px solid transparent;
    border-bottom: 2px dotted ${C.borderGray};
`;

const TextAreaField = styled.textarea`
    ${baseInputFieldStyles}

    height: 112px;
    resize: none;
    overflow-x: hidden;
    overflow-y: scroll;

    /* Add your specific styles for TextAreaField here */
    padding: 9px 10px;
    padding-bottom: 10px;
    gap: 26px;
    transition: all 0.3s ease-in-out;
    font-size: 1em;

    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-track {
        background: linear-gradient(180deg, #ffffff, #ffffff);
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: linear-gradient(180deg, ${C.main}, ${C.hover});
    }

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
`;
const InputDescription = styled.span`
    color: ${C.textBlackSecondary};
    font-size: 0.8em;
    opacity: 0.8;
    padding-top: 6px;
    padding-left: 10px;
    display: block;
    user-select: none;

    @media screen and (max-width: 576px) {
        padding-top: 8px;
        font-size: 0.85em;
    }
`;

// Custom styled checkbox
const CheckboxWrapper = styled.label`
    position: relative;
    width: fit-content;
`;

const CheckboxInputStyle = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const CheckboxCustom = styled.span`
    position: relative;
    display: inline-block;
    width: 38px;
    height: 38px;
    outline: 1px solid ${C.borderGray};
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        outline: 1px solid ${C.main};
    }
    &::before {
        width: 22px;
        height: 22px;
        background: ${C.main};
        transition: all 0.3s ease-in-out;
        mask: url(${IMAGES.CheckIcon});
        mask-size: inherit;
        mask-repeat: no-repeat;
        mask-position: center;
        position: relative;
        display: flex;
        opacity: ${(props) => (props.checked ? 1 : 0)};
        content: "";
        position: absolute;
        top: 7px;
        left: 8px;
    }
`;

export const formStyle = {
    InputContainer: InputContainer,
    InputField: InputField,
    InputFieldDisabled: InputFieldDisabled,
    TextAreaField: TextAreaField,
    Label: Label,
    InputDescription: InputDescription,
    CheckboxWrapper: CheckboxWrapper,
    CheckboxInputStyle: CheckboxInputStyle,
    CheckboxCustom: CheckboxCustom,
};
