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
  font-size: 2rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;
