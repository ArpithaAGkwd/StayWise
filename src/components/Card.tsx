import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  hoverable,
  className,
  children,
  ...props
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={clsx(
        "rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
        hoverable &&
          "transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
