import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "../../../store/MultilanguageStore";
// Variables
import S from "../../../assets/strings";
// Style
import { baseStyle } from "../../../assets/style/baseStyle";
const {
    Label,
    InputField,
    InputContainer,
    InputFieldDisabled,
    InputDescription,
    ErrorText,
} = baseStyle;

const Input = observer((props) => {
    const { language, getTranslation } = useMultilanguageStore();

    const {
        type,
        name,
        isRequired,
        labelText,
        inputDescription,
        customErrorMessage,
        defaultValue,
        autoComplete,
        isDisabled = false,
    } = props;

    // Sync with form
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    // Get value
    const inputValue = watch(name);

    // Set default value
    const checkDefaultValue =
        defaultValue === "" || defaultValue === undefined ? "-" : defaultValue;

    // Set default value
    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue);
        }
    }, [setValue, name, defaultValue, checkDefaultValue]);

    return (
        <InputContainer>
            {/* Label */}
            <Label className={inputValue ? "up" : ""}>{labelText}</Label>

            {!isDisabled ? (
                <InputField
                    type={type === "email" || type === "number" ? type : "text"}
                    id={name}
                    name={name}
                    autoComplete={autoComplete ? "on" : "off"}
                    {...register(name, {
                        required: isRequired
                            ? getTranslation("error.requiredInput")
                            : null,
                        pattern:
                            type === "email"
                                ? {
                                      value: S.emailPatternRegex,
                                      message:
                                          getTranslation("error.emailInvalid"),
                                  }
                                : null,
                    })}
                    // Change border color if error
                    style={{
                        borderBottomColor: errors[name] !== undefined && "red",
                    }}
                />
            ) : (
                <InputFieldDisabled>{checkDefaultValue}</InputFieldDisabled>
            )}

            {/* Optional description */}
            {inputDescription && (
                <InputDescription>{inputDescription}</InputDescription>
            )}
            {/* Error  */}
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <ErrorText>{customErrorMessage || message}</ErrorText>
                )}
            />
        </InputContainer>
    );
});
export default Input;
