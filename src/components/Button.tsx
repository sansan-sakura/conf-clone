import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width?: string;
  padding?: "sm" | "lg";
};
export const Button = ({ children, width = "fit-content", padding = "sm" }: Props) => {
  return (
    <button
      style={{ width }}
      className={`rounded-full py-1.5 px-4 font-bold bg-darkBlue text-white ${
        padding === "sm" ? "px-6 text-xs py-2.5 " : "py-4 text-sm"
      }`}
    >
      {children}
    </button>
  );
};
