import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonFile = styled.div`
  color:${theme.colors.white}
  `;

export const FileUploadButton = styled.label`
  align-items: center;
  text-align: center;
  display: inline-flex;
  font-size: 0.8rem;
  padding: 0.625rem;
  cursor: pointer;
  border-radius: 8px;
  gap: 0.375rem;
  background-color: ${theme.colors.blue.light};
  color:${theme.colors.white}
`;

export const RemoveButton = styled.button`
  align-items: center;
  display: inline-flex;
  padding: 0.625rem;
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.white}
`;

export const HiddenFileInput = styled.input.attrs({
  type: 'file',
})`
  display: none;
`;