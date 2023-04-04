import styled from "styled-components";
import { theme } from "../../styles/theme";

import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  width: 100vw;
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

export const ImageSide = styled.img`
  height: 100vh;
  width: 30vw;
  object-fit: cover;
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 22rem;
`;

export const RowButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  margin-top: 1.8rem;
`;
