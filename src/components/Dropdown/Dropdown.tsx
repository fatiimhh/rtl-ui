import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onSelect?: (value: string) => void;
}

export function Dropdown({ label, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(value: string) {
    onSelect?.(value);
    setIsOpen(false);
  }

  return (
    <div className="rtl-ui-dropdown" ref={ref}>
      <button
        className="rtl-ui-dropdown__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {label}
        <span className="rtl-ui-dropdown__caret">▾</span>
      </button>

      {isOpen && (
        <ul className="rtl-ui-dropdown__menu" role="menu">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                className="rtl-ui-dropdown__item"
                role="menuitem"
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}