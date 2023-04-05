import React from "react";

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Header,
  ButtonClose,
  TextButton,
  Close,
} from "../styles";

interface DetailsUserProps {
  children: React.ReactNode;
  tilte: string;
}

import { X } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";

export function DetailsUser({ children, tilte }: DetailsUserProps) {
  return (
    <Root>
      <Trigger>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Header>
            <Close>
              <ButtonClose>
                <TextButton>Fechar</TextButton>
                <X size={"2rem"} color={theme.colors.white} />
              </ButtonClose>
            </Close>
          </Header>
          <Title>{tilte}</Title>
        </Content>
      </Portal>
    </Root>
  );
}
