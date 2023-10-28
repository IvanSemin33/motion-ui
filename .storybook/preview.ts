import type { Preview } from "@storybook/react";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
    themes: {
      default: "light",
      list: [
        { name: "light", class: "light", color: "#fff" },
        { name: "dark", class: "dark", color: "#23262d" },
      ],
    },
  },
};

export default preview;
