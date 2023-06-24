import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 5px solid #f3f3f3;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${rotate360} 1s linear infinite;
`;
