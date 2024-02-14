import React from "react";
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "src/store/MultilanguageStore";

// Style
import styled from "styled-components";
import { FormGroup, FormLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { baseStyle } from "../../../assets/style/baseStyle";
import C from "../../../assets/style/colors";

const BlockHeader = styled(baseStyle.BlockHeader)`
    font-size: 1.2em;
    display: block;
    margin-top: 24px;
    margin-bottom: -20px;
    border-bottom: 2px solid red;
    width: fit-content;
    color: ${C.textBlackMain};
    @media screen and (max-width: 1200px) {
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

// DateRangeFilter component with observer
const DateRangeFilter = observer(({ filterList, onChange, index, column }) => {
    // Multilanguage store
    const { language, getTranslation } = useMultilanguageStore();

    // Handle date change and trigger onChange
    const handleDateChange = (newValue, dateIndex) => {
        filterList[index][dateIndex] = new Date(newValue);
        onChange(filterList[index], index, column);
    };

    // Render date range filter UI
    return (
        <div>
            <FormLabel>{getTranslation("table.datetimeRange")}</FormLabel>

            <FormGroup row>
                {[0, 1].map((dateIndex) => (
                    <DatePicker
                        key={dateIndex}
                        label={dateIndex === 0 ? "min" : "max"}
                        value={new Date(filterList[index][dateIndex])}
                        onChange={(newValue) =>
                            handleDateChange(newValue, dateIndex)
                        }
                        style={{ width: "45%", marginRight: "5%" }}
                        format="dd-MM-yyyy"
                    />
                ))}
            </FormGroup>

            <FormLabel>{getTranslation("table.datetimeRangeNotice")}</FormLabel>

            <BlockHeader>{getTranslation("table.filterNotice")}</BlockHeader>
        </div>
    );
});

export default DateRangeFilter;
