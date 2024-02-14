import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "src/store/MultilanguageStore";

import { baseStyle } from "../../../assets/style/baseStyle";
import IMAGES from "src/assets/images";
const {
    DropdownContainer,
    DropdownButton,
    DropdownIcon,
    DropdownButtonLabel,
    DropdownContent,
    DropdownList,
    DropdownListItem,
} = baseStyle;

const Dropdown = observer(
    ({ label, defaultOption, dropdownOptions, onClickAction }) => {
        // Hook into MultilanguageStore for translations
        const { language, getTranslation } = useMultilanguageStore();

        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState(defaultOption);

        const dropdownRef = useRef(null);

        const toggling = () => setIsOpen(!isOpen);

        const onOptionClicked = (value) => () => {
            setSelectedOption(value);
            setIsOpen(false);
            onClickAction(value);
        };

        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener("click", handleClickOutside);

            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        }, []);

        return (
            <DropdownContainer ref={dropdownRef}>
                <DropdownButton onClick={toggling}>
                    <DropdownButtonLabel className={selectedOption ? "up" : ""}>
                        {label}
                    </DropdownButtonLabel>
                    <span>{selectedOption}</span>
                    <DropdownIcon
                        icon={IMAGES.ArrowDownIcon}
                        isdropdownopen={isOpen.toString()}
                    ></DropdownIcon>
                </DropdownButton>

                <DropdownContent isOpen={isOpen}>
                    <DropdownList>
                        {dropdownOptions.map((option) => {
                            const isActive = option === selectedOption;

                            return (
                                <DropdownListItem
                                    onClick={onOptionClicked(option)}
                                    key={Math.random()}
                                    active={isActive.toString()}
                                >
                                    {option}
                                </DropdownListItem>
                            );
                        })}
                    </DropdownList>
                </DropdownContent>
            </DropdownContainer>
        );
    }
);

export default Dropdown;
