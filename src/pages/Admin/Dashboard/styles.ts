import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.5rem;
  background: ${theme.colors.background.primary};
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
`;