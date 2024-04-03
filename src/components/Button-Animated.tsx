import { ReactNode } from "react";
import styles from "./button-animated.module.css";

type Props = {
  children: ReactNode;
  width?: string;
  className?: string;
  padding?: "sm" | "lg";
};
export const ButtonAnimated = ({ children, width = "100%", className, padding = "sm" }: Props) => {
  return (
    <button
      className={`origin-[50%_100%] duration-1000 font-bold bg-mainOrange px-6 rounded-full text-xs py-2.5 text-darkBlue relative ${
        styles.button
      } ${className} ${padding === "sm" ? "px-6 text-xs py-2.5 " : "py-4 text-sm"}`}
      style={{ width }}
    >
      <div className={` rounded-full text-xs text-darkBlue ${styles.button} ${className}`}>
        {children}
      </div>
      <span
        className={`${styles.hover_button} absolute bg-lightOrange bottom-0 w-[30px] h-[20px] rounded-full -z-1`}
      ></span>
    </button>
  );
};
