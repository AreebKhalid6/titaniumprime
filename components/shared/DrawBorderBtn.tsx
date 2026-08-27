import { type ReactNode } from "react";
import ChromeDrawBorder from "./ChromeDrawBorder";

type DrawBorderBtnProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  gradId: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function DrawBorderBtn({
  children,
  href,
  className = "",
  gradId,
  type = "button",
  onClick,
}: DrawBorderBtnProps) {
  const classes = `group relative inline-flex items-center justify-center ${className}`;

  const content = (
    <>
      <ChromeDrawBorder gradId={gradId} />
      <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
