import styled from "styled-components";
import { theme } from "../../../styles/theme";

import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    padding: 1.5rem 3rem;
    background: ${theme.colors.background.primary};
`;

export const Title = styled.h1`
    color: ${theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const SideBar = styled.div`
  position: fixed;
`;

export const FormContainer = styled.div`
  background-color: ${theme.colors.background.secondary};
  top: 80px;
  padding: 2rem;
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
;`

export const ProfileContent = styled.form`
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
`;

export const TitleInput = styled.h2`
  color: ${theme.colors.white};
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const Subtitle = styled.h3`
  color: ${theme.colors.white};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.4rem;
  text-align: left;
`;

export const Content = styled.main`
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

export const ButtonIcon = styled.button`
  background-color: ${theme.colors.blue.light};
  border: none;
  line-height: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 0.2rem;

  :hover {
    background-color: ${theme.colors.blue.dark};
    transition: 0.2s;
    cursor: pointer;
  }
`;

export const ButtonRemove = styled.button`
  background-color: transparent;
  border: 1px solid ${theme.colors.blue.light};
  line-height: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 0.2rem;

  :hover {
    background-color: ${theme.colors.blue.dark};
    transition: 0.2s;
    cursor: pointer;
  }
`;

export const ButtonEdit = styled.div`
  margin-top: 1rem;
  text-align: center;
  background-color: none;  
  padding: 0.8rem;
  max-width: 8rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.blue.dark};
  :hover{
    background-color: ${theme.colors.blue.light};
    }
  span{
    color: ${theme.colors.white};
  }
`;
