import styled from "styled-components";
import { theme } from "../../styles/theme";

import * as Avatar from "@radix-ui/react-avatar";

interface ButtonProps {
  isFocus: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavContainer = styled.div`
  background-color: ${theme.colors.gray[700]};
  overflow: hidden;
  height: 100vh;
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  position: fixed;
`;

export const Root = styled(Avatar.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  background-color: ${theme.colors.white};
`;

export const Image = styled(Avatar.Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: none;
`;

export const Fallback = styled(Avatar.Fallback)`
  color: ${theme.colors.blue.light};
  font-weight: bold;
  font-size: 1rem;
`;

export const Divider = styled.div`
  height: 0.05rem;
  width: 200%;
  background-color: ${theme.colors.divider};
  margin: 1rem 0;
`;

export const Button = styled.button<ButtonProps>`
  height: 2.6rem;
  width: 2.6rem;
  background-color: ${(props) =>
    props.isFocus ? theme.colors.blue.light : "transparent"};
  border: none;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: 0.3s;
  cursor: pointer;
`;

export const ButtonSignout = styled.button`
  height: 2.6rem;
  width: 2.6rem;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  margin-left: 5rem;
`;
