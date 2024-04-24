import backgroundImage from '@assets/bg-desktop-dark.jpg';
import { styled } from 'styled-components';

export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181824;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 40%;
`;

export const ContentBox = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30%;
  min-height: 60vh;
`;
