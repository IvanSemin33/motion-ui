import { addons } from "@storybook/addons";
import theme from "./theme";
// @ts-ignore
import favicon from "./assets/logo.svg";

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: theme,
  panelPosition: "right",
  showPanel: true,
});
