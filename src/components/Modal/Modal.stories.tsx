import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

function ModalDemo({ title, body }: { title: string; body: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        <p>{body}</p>
      </Modal>
    </>
  );
}

const meta: Meta<typeof ModalDemo> = {
  title: "Components/Modal",
  component: ModalDemo,
};

export default meta;
type Story = StoryObj<typeof ModalDemo>;

export const Default: Story = {
  args: {
    title: "Confirm action",
    body: "Are you sure you want to continue? This can't be undone.",
  },
};

export const Arabic: Story = {
  args: {
    title: "تأكيد الإجراء",
    body: "هل أنت متأكد أنك تريد المتابعة؟ لا يمكن التراجع بعد التاكيد.",
  },
};