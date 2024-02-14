import { containersStyle } from "./components/containersStyle";
import { textStyle } from "./components/textStyle";
import { formStyle } from "./components/formStyle";
import { buttonStyle } from "./components/buttonStyle";
import { modalWindow } from "./components/modalWindow";
import { dropdownStyle } from "./components/dropdownStyle";
import { cardStyle } from "./components/cardStyle";
import { panelStyle } from "./components/panelStyle";

export const baseStyle = {
    ...containersStyle,
    ...textStyle,
    ...formStyle,
    ...buttonStyle,
    ...modalWindow,
    ...dropdownStyle,
    ...cardStyle,
    ...panelStyle,
};
