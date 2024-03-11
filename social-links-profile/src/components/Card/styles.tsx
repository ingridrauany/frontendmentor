import { styled } from "styled-components";

export const CardBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 15px;
  min-width: 25%;
  min-height: 70%;

  @media (max-width: 450px) {
    width: 80%;
    height: auto;
  }
`;
