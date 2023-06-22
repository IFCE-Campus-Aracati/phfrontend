import styled from "styled-components";
import { theme } from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem;
  justify-content: flex-end;
  align-items: center;

  text{
    color: white;
    border: 1px solid white;
  }

  button {
    width: 2rem;
    height: 2rem;
    background-color: ${theme.colors.gray[700]};
    color: white;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;

    :disabled{
      color: ${theme.colors.background.primary};
      cursor: default;
    }
  }
`;

export const TextContainer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.3rem;
  border: 1px solid gray;
`;