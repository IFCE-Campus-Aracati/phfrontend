import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background.primary};
`;

export const Image = styled.img`
  height: 250px;
  margin: 24px;
`;

export const Title = styled.h1`
  color: ${theme.colors.blue.light};
`;
