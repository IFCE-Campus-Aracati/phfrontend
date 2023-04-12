import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import { theme } from "../../styles/theme";

export const Root = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)`
  border: none;
  background-color: transparent;
`;

export const Portal = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${theme.colors.overlay};
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  background-color: ${theme.colors.background.secondary};
  min-height: 20vh;
  min-width: 25vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Title = styled(Dialog.Title)`
  color: ${theme.colors.white};
  font-size: 1.5rem;
`;

export const Description = styled(Dialog.Description)`
  color: ${theme.colors.white};
  margin-top: 0.2rem;
`;

export const Header = styled.div`
  line-height: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TextButton = styled.span`
  font-size: 1rem;
  color: ${theme.colors.white};
`;

export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Close = styled(Dialog.Close)`
  border: none;
  background-color: transparent;
`;
