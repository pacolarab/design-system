import React from "react";
import "./M22ContentText.css";

interface CheckItem {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  valueIsLink?: boolean;
}

interface M22ContentTextProps {
  title: string;
  body: string;
  items: CheckItem[];
  notice?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  theme?: "base" | "bw";
}

export function M22ContentText({
  title,
  body,
  items,
  notice,
  buttonText,
  onButtonClick,
}: M22ContentTextProps) {
  return (
    <section className="m22">
      {/* Left column */}
      <div className="m22__left">
        <h2 className="m22__title">{title}</h2>
        <p className="m22__body">{body}</p>
      </div>

      {/* Right column */}
      <div className="m22__right">
        <div className="m22__slot-list">
          {/* Slot 01 — check items */}
          <div className="m22__slot-01">
            {items.map((item, index) => (
              <div className="m22__check" key={index}>
                <div className="m22__check-icon">{item.icon}</div>
                <div className="m22__check-text">
                  <p className="m22__check-label">{item.label}</p>
                  <p
                    className={
                      item.valueIsLink
                        ? "m22__check-value m22__check-value--link"
                        : "m22__check-value"
                    }
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slot 02 — notice box */}
          {notice && <p className="m22__notice">{notice}</p>}
        </div>

        {/* Button */}
        {buttonText && (
          <button className="m22__button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

export default M22ContentText;
