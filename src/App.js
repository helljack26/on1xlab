import Routes from "./routes";

// Style
import "./assets/css/App.css";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

// Providers
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
    return (
        <StyleSheetManager
            enableVendorPrefixes
            shouldForwardProp={(propName, elementToBeRendered) => {
                return typeof elementToBeRendered === "string"
                    ? isPropValid(propName)
                    : true;
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Routes />
            </LocalizationProvider>
        </StyleSheetManager>
    );
}

export default App;
