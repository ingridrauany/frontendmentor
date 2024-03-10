import { styled } from "styled-components";

export const CardBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 15px;
  width: 25%;
  height: 80%;
  padding: 40px 0;

  @media (max-width: 450px) {
    width: 80%;
    height: auto;
  }
`;
