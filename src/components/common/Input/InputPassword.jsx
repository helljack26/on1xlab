import React, { useState, useEffect } from "react";
import { useFormState, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { observer } from "mobx-react-lite";

// Store
import { useMultilanguageStore } from "../../../store/MultilanguageStore";

// Variables
import S from "../../../assets/strings";
import IMAGES from "../../../assets/images";
// Style
import { baseStyle } from "../../../assets/style/baseStyle";
const {
    Label,
    InputField,
    InputContainer,
    InputDescription,
    ErrorText,
    ButtonShowPassword,
} = baseStyle;

// Component
const InputPassword = observer((props) => {
    const { language, getTranslation } = useMultilanguageStore();

    const {
        name,
        isRequired,
        labelText,
        inputDescription,
        isParentError,
        isShowPassword,
        passwordPattern,
        defaultValue,
        autoComplete,
    } = props;

    // Sync with form
    const { register, watch, setValue } = useFormContext();

    const { errors } = useFormState();

    // Get value
    const inputValue = watch(name);

    // Set default value
    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue);
        }
    }, [setValue, name, defaultValue]);

    // Handle show password button
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPassword ? "text" : "password";

    return (
        <InputContainer>
            {/* Label */}
            <Label className={inputValue ? "up" : ""}>{labelText}</Label>

            <InputField
                type={inputType}
                id={name}
                name={name}
                autoComplete={autoComplete ? "on" : "new-password"}
                {...register(name, {
                    required: isRequired
                        ? getTranslation("error.requiredInput")
                        : null,
                    pattern: passwordPattern
                        ? {
                              value: S.passwordPatternRegex,
                              message: getTranslation("error.passwordInvalid"),
                          }
                        : null,
                })}
                // Change border color if error
                style={{
                    borderBottomColor:
                        (errors[name] !== undefined || isParentError) && "red",
                }}
            />

            {/* Show password button */}
            {isShowPassword && (
                <ButtonShowPassword
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    buttonImage={IMAGES.ShowPassIcon}
                    isActive={showPassword}
                ></ButtonShowPassword>
            )}

            {/* Error */}
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <ErrorText>{message}</ErrorText>}
            />

            {/* Optional description */}
            {inputDescription && (
                <InputDescription>{inputDescription}</InputDescription>
            )}
        </InputContainer>
    );
});
export default InputPassword;
