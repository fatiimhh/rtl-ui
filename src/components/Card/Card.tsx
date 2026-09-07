import "./Card.css";

export interface CardProps {
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
}

function ArrowIcon() {
  return (
    <svg
      className="rtl-ui-card__arrow"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Card({ title, description, linkText, onLinkClick }: CardProps) {
  return (
    <div className="rtl-ui-card">
      <h3 className="rtl-ui-card__title">{title}</h3>
      <p className="rtl-ui-card__description">{description}</p>
      {linkText && (
        <button className="rtl-ui-card__link" onClick={onLinkClick}>
          <span>{linkText}</span>
          <ArrowIcon />
        </button>
      )}
    </div>
  );
}