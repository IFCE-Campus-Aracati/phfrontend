import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 8rem;
`;

export const TextInfo = styled.span`
  color: ${theme.colors.white};
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Text = styled.span`
  font-weight: normal;
  color: ${theme.colors.white};
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 1rem;
`;
