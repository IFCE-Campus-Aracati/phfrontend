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

import { Text, Body, ButtonArea } from "./styles";

interface DeleteProps {
  children: React.ReactNode;
  tilte: string;
}

import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";

export function Delete({ children, tilte }: DeleteProps) {
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
            <Text>Essa ação não poderá ser desfeita.</Text>
          </Body>
          <ButtonArea>
            <Close>
              <Button size="medium" variant="fill" title="cancelar" />
            </Close>
            <Button
              size="medium"
              variant="outline"
              title="CONFIRMAR"
              onClick={() => alert("Função indisponível")}
            />
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
