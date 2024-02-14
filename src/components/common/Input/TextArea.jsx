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
    TextAreaField,
    InputFieldDisabled,
    InputContainer,
    InputDescription,
    ErrorText,
} = baseStyle;

const TextArea = observer((props) => {
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
    }, [setValue, name, defaultValue]);

    return (
        <InputContainer>
            {/* Label */}
            <Label
                className={inputValue || checkDefaultValue === "-" ? "up" : ""}
            >
                {labelText}
            </Label>

            {isDisabled === false ? (
                <TextAreaField
                    id={name}
                    name={name}
                    autoComplete={autoComplete ? "on" : "off"}
                    {...register(name, {
                        required: isRequired
                            ? getTranslation("error.requiredInput")
                            : null,
                    })}
                    // Change border color if error
                    style={{
                        borderBottomColor: errors[name] !== undefined && "red",
                    }}
                    isDisabled={isDisabled}
                ></TextAreaField>
            ) : (
                <InputFieldDisabled>
                    {defaultValue === "" || defaultValue === undefined
                        ? "-"
                        : defaultValue}
                </InputFieldDisabled>
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
export default TextArea;
