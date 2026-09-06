import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../Button/Button";

function ToastDemo({ message, variant }: { message: string; variant: "success" | "error" }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Show toast</Button>
      <Toast
        message={message}
        variant={variant}
        isVisible={isVisible}
        onDismiss={() => setIsVisible(false)}
      />
    </>
  );
}

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
};

export default meta;
type Story = StoryObj<typeof ToastDemo>;

export const Success: Story = {
  args: {
    message: "Changes saved successfully.",
    variant: "success",
  },
};

export const ArabicSuccess: Story = {
  args: {
    message: "تم حفظ التغييرات بنجاح.",
    variant: "success",
  },
};