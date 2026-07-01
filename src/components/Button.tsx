import clsx from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const variantClasses = {
    primary:
      "bg-(image:--primary-blue-gradient) text-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:opacity-95",
    secondary:
      "border border-[#e5e7eb] bg-[#f8f9fc] text-[#00004a] hover:bg-white",
    ghost:
      "border border-dashed border-[#e5e7eb] bg-transparent text-[#00004a] hover:bg-white",
  } satisfies Record<NonNullable<ButtonProps["variant"]>, string>;

  return (
    <button
      className={clsx(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] px-4 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
