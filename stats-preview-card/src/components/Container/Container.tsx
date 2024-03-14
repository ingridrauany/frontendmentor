import { ReactNode } from "react";
import { ContainerBox } from "./styles";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <ContainerBox>{children}</ContainerBox>;
};
