import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 100%;
  gap: 0.8rem;
`;

export const TextInfo = styled.span`
  color: ${theme.colors.white};
  margin-bottom: 1rem;
`;

export const Text = styled.span`
  font-weight: bold;
`;

export const ButtonArea = styled.div``;

export const Description = styled.div``;
