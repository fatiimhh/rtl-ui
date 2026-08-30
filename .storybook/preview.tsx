import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  globalTypes: {
    direction: {
      description: "Text direction",
      defaultValue: "ltr",
      toolbar: {
        title: "Direction",
        icon: "globe",
        items: [
          { value: "ltr", title: "LTR (English)" },
          { value: "rtl", title: "RTL (Arabic)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const direction = context.globals.direction || "ltr";
      return React.createElement(
        "div",
        { dir: direction, style: { fontFamily: "sans-serif", padding: "1rem" } },
        React.createElement(Story)
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;