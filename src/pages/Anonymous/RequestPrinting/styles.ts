import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  background: ${theme.colors.background.primary};
`;

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.75rem;
`;

export const FormContainer = styled.form``;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 1.5rem;
`;

export const TitleInput = styled.h3`
  color: ${theme.colors.white};
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ButtonBack = styled.button`
  line-height: 0;
  background: none;
  border: none;
  color: ${theme.colors.white};

  :hover {
    color: ${theme.colors.blue.light};
  }
`;