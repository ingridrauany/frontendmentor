import { ReactNode } from 'react';
import { ContainerBox, ContentBox } from './styles';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <ContainerBox>
      <ContentBox>{children}</ContentBox>
    </ContainerBox>
  );
};
