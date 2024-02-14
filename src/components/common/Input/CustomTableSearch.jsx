import React, { createRef, useEffect } from "react";

// Mui component
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const CustomTableSearch = ({
    searchPlaceholder,
    searchText,
    onSearch,
    onHide,
}) => {
    const searchFieldRef = createRef();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.ctrlKey && event.key === "f") {
                event.preventDefault(); // Prevents the browser's default Ctrl+F behavior
                searchFieldRef.current.focus();
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [searchFieldRef]);

    return (
        <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder={searchPlaceholder}
            value={searchText}
            onChange={(e) => onSearch(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                ),
            }}
            inputRef={searchFieldRef}
        />
    );
};
export default CustomTableSearch;
