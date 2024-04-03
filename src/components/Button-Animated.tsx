import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width?: string;
  className?: string;
  padding?: "sm" | "lg";
};
export const ButtonAnimated = ({ children, width = "100%", className, padding = "sm" }: Props) => {
  return (
    <button
      className={`origin-[50%_100%] duration-1000 font-bold bg-mainOrange px-6 rounded-full text-xs py-2.5 text-darkBlue relative uppercase z-10  group overflow-hidden ${className} ${
        padding === "sm" ? "px-6 text-xs py-2.5 " : "py-4 text-sm"
      }`}
      style={{ width }}
    >
      <div className={`z-10 text-xs text-darkBlue relative  ${className}`}>{children}</div>
      <span
        className={` absolute bg-lightOrange left-1/2 -translate-x-1/2 rounded-full -z-10  group-hover:top-0  origin-[50%_100%] duration-700 opacity-0 group-hover:opacity-100 group-hover:rounded-none     ${
          padding === "sm"
            ? " w-[20px] h-[16px] group-hover:h-[40px] group-hover:w-[140px] "
            : " w-[30px] h-[26px] group-hover:h-[300px] group-hover:w-[800px]"
        }
    }`}
      ></span>
    </button>
  );
};
