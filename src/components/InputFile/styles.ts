import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 7.5rem;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  align-items: center;
  gap: 0.625rem;
  display: flex;
  cursor: pointer;
  padding: .5rem 1rem;

   input[type="file"] {
    display: none;
  }
`;

export const FileInput = styled.input``;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${theme.colors.black};
`;

