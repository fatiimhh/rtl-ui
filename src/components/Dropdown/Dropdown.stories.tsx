import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Select option",
    options: [
      { label: "Option one", value: "one" },
      { label: "Option two", value: "two" },
      { label: "Option three", value: "three" },
    ],
  },
};

export const Arabic: Story = {
  args: {
    label: "اختر خيارًا",
    options: [
      { label: "الخيار الأول", value: "one" },
      { label: "الخيار الثاني", value: "two" },
      { label: "الخيار الثالث", value: "three" },
    ],
  },
};