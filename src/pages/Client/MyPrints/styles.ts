import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.background.primary};
  padding: 1.5rem;
`;

export const Title = styled.span`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const EmpytRegister = styled.div`
  display: flex;
  justify-content: center;
  padding: 6rem;
`;

export const EmpytRegisterText = styled.span`
  text-align: center;
  color: ${theme.colors.white};
  font-weight: bold;
`;
