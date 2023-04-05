import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  padding: 1.5rem 3rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${theme.colors.white};
`;

export const InputTitle = styled.span`
   color: ${theme.colors.white};
   font-size: 1rem;
   margin-bottom: 0.625rem;
    /* letter-spacing: 1px; */
`;

export const Content = styled.div`
  margin-top: 1rem;
`;
