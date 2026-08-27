import { type ReactNode } from "react";

export const EXPERIENCE_MAX_WIDTH = 1400;

type ExperienceContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function ExperienceContainer({
  children,
  className = "",
}: ExperienceContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] ${className}`}>{children}</div>
  );
}
