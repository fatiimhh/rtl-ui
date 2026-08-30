import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Getting started",
    description: "Learn the basics of the RTL-aware component library.",
    linkText: "Read more",
  },
};

export const Arabic: Story = {
  args: {
    title: "دليل البدء",
    description: "تعرف على أساسيات مكتبة المكونات المتوافقة مع الاتجاه من اليمين لليسار.",
    linkText: "اقرأ المزيد",
  },
};