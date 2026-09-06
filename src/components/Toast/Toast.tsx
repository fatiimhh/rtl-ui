import { useEffect } from "react";
import "./Toast.css";

export interface ToastProps {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
  variant?: "success" | "error";
}

export function Toast({ message, isVisible, onDismiss, variant = "success" }: ToastProps) {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [isVisible, onDismiss]);

  if (!isVisible) return null;

  return (
    <div className={`rtl-ui-toast rtl-ui-toast--${variant}`} role="status">
      {message}
    </div>
  );
}