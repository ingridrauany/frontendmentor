import { styled } from "styled-components";

export const SocialButton = styled.a`
  background-color: #333333;
  color: #fff;
  text-decoration: none;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #c4f82a;
    color: #333333;
  }
`;

export const SocialLinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
