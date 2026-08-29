import { type ReactNode } from "react";

export const ABOUT_MAX_WIDTH = 1450;

type AboutContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function AboutContainer({
  children,
  className = "",
}: AboutContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1450px] ${className}`}>
      {children}
    </div>
  );
}
