import React from "react";
import "./Input.css";

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchIcon() {
  return (
    <svg
      className="rtl-ui-input__icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <div className="rtl-ui-input-wrapper">
      <SearchIcon />
      <input
        className="rtl-ui-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}