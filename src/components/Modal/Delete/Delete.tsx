import React, { useEffect, useState } from "react";

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
import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";

import { Text, Body, ButtonArea } from "./styles";
import { useAuth } from "../../../hooks/auth";
import api from "../../../server/api";

interface DeleteProps {
  id?: string;
  children: React.ReactNode;
  tilte: string;
}

export function Delete({ id, children, tilte }: DeleteProps) {
  const { deletePrinter } = useAuth();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  async function handleDelete() {
    try {
      await deletePrinter(id as string);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <Root onOpenChange={setIsOpen} open={isOpen}>
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
              onClick={() => handleDelete()}
            />
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
