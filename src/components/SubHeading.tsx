import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SubHeading = ({ children }: Props) => {
  return <h3 className="text-2xl leading-[30px]">{children}</h3>;
};
