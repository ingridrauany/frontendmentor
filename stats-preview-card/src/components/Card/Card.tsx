import { ReactNode } from "react";
import { CardBox } from "./styles";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <CardBox>{children}</CardBox>;
};
