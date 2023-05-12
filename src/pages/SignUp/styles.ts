import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.background.primary};
`;

export const Body = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  text-align: start;
`;

export const SubTitle = styled.h2`
  color: ${theme.colors.white};
  text-align: start;
`;

export const HeaderNavigation = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.white};
  font-size: 1.2rem;

  :hover {
    color: ${theme.colors.blue.light};
    transition: 100ms;
  }
`;

export const TextLink = styled.p``;

export const TextContainer = styled.div`
gap: 0.3rem;
display: flex;
flex-direction: row;
justify-content: center;
`;

export const SmallLinkButton = styled(Link)`
text-decoration: none;
color: ${theme.colors.white};
font-size: 0.8rem;

:hover {
  color: ${theme.colors.blue.light};
  transition: 100ms;
}
`;

export const Text = styled.p`
color: ${theme.colors.white};
font-size: 0.8rem;
`;

export const ImageSide = styled.img`
  height: 100vh;
  width: 30vw;
  object-fit: cover;
`;
