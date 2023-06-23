import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";

export const ButtonIcon = styled.label`
  background-color: ${theme.colors.blue.light};
  border: none;
  line-height: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${theme.colors.blue.dark};
    transition: 0.2s;
    cursor: pointer;
  }
`;
export const ButtonRemove = styled.button`
  background-color: rgba(66, 66, 66, 0.20);
  line-height: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 0.2rem;
  border: none;
  
  :hover {
    background-color: ${theme.colors.blue.dark};
    transition: 0.2s;
    cursor: pointer;
  }
`;
export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
`;
export const ImageSide = styled.img`
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 0.2rem;
  height: 18rem;
  width: 15rem;
  object-fit: cover;
`;

export const Attachments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem 1rem 0rem 1rem;
`;

export const HiddenUploadImage = styled.input.attrs({
    type: 'file',
  })`
    display: none;
`;
