import clsx from "clsx";
import Logo from "../assets/stay-wise-logo.png";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={clsx(
        "flex h-20 items-center justify-start bg-[#00002d]",
        className,
      )}
      aria-label="Primary"
    >
      <div className="flex h-full items-center">
        <img
          src={Logo}
          alt="StayWise Logo"
          className="block h-full w-auto object-contain"
        />
      </div>
    </nav>
  );
}
