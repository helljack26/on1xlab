import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

// Store
import { observer } from "mobx-react-lite";
// Style
import { baseStyle } from "../../../assets/style/baseStyle";
const { CheckboxWrapper, CheckboxInputStyle, CheckboxCustom } = baseStyle;

const CheckboxInput = observer((props) => {
    const {
        name,
        defaultValue,
        isDisabled = false,
        checkboxWrapperTitle,
        isChecked,
        handleChange,
        elementId,
    } = props;

    // Sync with form
    const { register } = useFormContext();

    return (
        <CheckboxWrapper title={checkboxWrapperTitle}>
            <CheckboxInputStyle
                type="checkbox"
                id={name}
                name={name}
                disabled={isDisabled}
                defaultChecked={isChecked}
                {...register(name, {
                    onChange: (e) => {
                        handleChange(!isChecked ? elementId : null);
                    },
                })}
            />
            <CheckboxCustom checked={isChecked} />
        </CheckboxWrapper>
    );
});

export default CheckboxInput;
