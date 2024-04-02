import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SubHeading = ({ children }: Props) => {
  return <h3 className="text-3xl">{children}</h3>;
};
