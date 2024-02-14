import React from "react";
import C from "src/assets/style/colors";
import IMAGES from "src/assets/images";
import { useMultilanguageStore } from "src/store/MultilanguageStore";
import { baseStyle } from "src/assets/style/baseStyle";
import styled, { css } from "styled-components";

const {
    ButtonMainFilled,
    PanelActionButtonsStyle,
    ButtonPlainText,
    ButtonSecondaryFilled,
    ButtonSecondaryFilledRed,
} = baseStyle;

const IconOnMobile = css`
    @media screen and (max-width: 576px) {
        padding: 12px;
        border-radius: 50%;
    }
    & > span {
        @media screen and (max-width: 576px) {
            display: none;
        }
    }
    & > i {
        display: none;
        @media screen and (max-width: 576px) {
            background: white;
            display: inline-block;
        }
    }
`;
const ButtonSecondaryWithIcon = styled(ButtonSecondaryFilled)`
    i {
        mask: url(${IMAGES.EditIcon});
    }
    ${IconOnMobile};
`;
const ButtonSecondaryRedWithIcon = styled(ButtonSecondaryFilledRed)`
    i {
        mask: url(${IMAGES.CrossIcon});
    }
    ${IconOnMobile};
`;

const PanelActionButtons = ({
    isDisabledButtons,
    setDisableEdit,
    setDisableButtons,
    isUpdated,
    onCancelClick,
    isUpperButtons,
}) => {
    const { getTranslation } = useMultilanguageStore();

    const isUpdatedCheck = isUpdated ?? null;

    // Function for rendering upper buttons
    const renderUpperButtons = () => {
        return (
            <>
                {/* Change */}
                {isDisabledButtons && !isUpdated && (
                    <ButtonSecondaryWithIcon
                        onClick={() => {
                            setDisableButtons(false);
                            setDisableEdit(false);
                        }}
                        type="button"
                    >
                        <span>{getTranslation("buttonDefault.change")}</span>
                        <i></i>
                    </ButtonSecondaryWithIcon>
                )}

                {/* Cancel */}
                {!isDisabledButtons && !isUpdated && (
                    <ButtonSecondaryRedWithIcon
                        onClick={onCancelClick}
                        type="button"
                    >
                        <span>{getTranslation("buttonDefault.cancel")}</span>
                        <i></i>
                    </ButtonSecondaryRedWithIcon>
                )}
            </>
        );
    };
    // Function for rendering default buttons
    const renderDefaultButtons = () => (
        <>
            {/* Save */}
            {!isDisabledButtons && (
                <ButtonMainFilled
                    customcolor={C.green}
                    customhover={C.greenHover}
                    type="submit"
                    disablepointer={isUpdatedCheck.toString()}
                >
                    {isUpdatedCheck
                        ? getTranslation("buttonDefault.saved")
                        : getTranslation("buttonDefault.save")}
                </ButtonMainFilled>
            )}
            {/* Cancel */}
            {!isDisabledButtons && !isUpdated && (
                <ButtonPlainText
                    customcolor={C.red}
                    customhover={C.redHover}
                    onClick={onCancelClick}
                    type="button"
                >
                    {getTranslation("buttonDefault.cancel")}
                </ButtonPlainText>
            )}
        </>
    );
    return (
        <>
            <PanelActionButtonsStyle>
                {isUpperButtons ? renderUpperButtons() : renderDefaultButtons()}
            </PanelActionButtonsStyle>
        </>
    );
};

export default PanelActionButtons;
