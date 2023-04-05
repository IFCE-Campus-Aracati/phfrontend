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

import { TextInfo, Text, Body, ButtonArea } from "./styles";

interface DetailsUserProps {
  children: React.ReactNode;
  tilte: string;
}

import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";

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
          <Body>
            <TextInfo>
              Email: <Text>gabriel@teste.com</Text>
            </TextInfo>
            <TextInfo>
              Nome: <Text>Gabriel</Text>
            </TextInfo>
            <TextInfo>
              Cargo: <Text>Bolsista</Text>
            </TextInfo>
          </Body>
          <ButtonArea>
            <Button size="medium" variant="fill" title="Editar">
              <PencilSimpleLine size={"1.25rem"} color={theme.colors.white} />
            </Button>
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
