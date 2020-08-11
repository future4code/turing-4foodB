import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const TelaInicialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e8222e;
`;
export const LogoContainer = styled.img`
  width: 7rem;
  height: 4rem;
  margin: 1rem;
  animation: ${rotate360} 3s linear infinite;
`;