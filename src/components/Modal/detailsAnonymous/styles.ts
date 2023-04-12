import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  color: ${theme.colors.white};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 100%;
`;

export const TextInfo = styled.span`
  color: ${theme.colors.white};
  margin-bottom: 1rem;
`;

export const Text = styled.span`
  font-weight: bold;
`
export const Description = styled.p`
  display: block;
  color: ${theme.colors.white};
  margin-top: 0.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonFile = styled.button`
  display: flex;
  background-color: ${theme.colors.blue.dark};
  padding: 0.5rem;
  color: ${theme.colors.white};
  gap: 0.625rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  align-items: center;
  cursor: pointer;
  
  :hover {
    background-color: ${theme.colors.blue.light};
  }
`;