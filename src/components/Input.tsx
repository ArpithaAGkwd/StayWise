import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label: string;
}

export function Input({ icon, label, className, ...props }: InputProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-[#6b7280]">{label}</span>
      <span className="flex items-center gap-2 rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3">
        {icon ? (
          <span className="inline-flex text-[#95818d]">{icon}</span>
        ) : null}
        <input
          className={clsx(
            "w-full border-0 bg-transparent text-[#111827] outline-none placeholder:text-[#9ca3af]",
            className,
          )}
          {...props}
        />
      </span>
    </label>
  );
}
