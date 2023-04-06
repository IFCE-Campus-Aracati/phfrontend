import React from "react";

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Header,
  ButtonClose,
  TextButton,
  Close,
} from "../styles";

interface ChangePassword {
  children: React.ReactNode;
  tilte: string;
}

import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { ButtonArea, Body } from "./styles";

export function ChangePassword({ children, tilte }: ChangePassword) {
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
            <Description>
            Sua senha deve conter no mínimo 8 e no máximo 70 caracteres.
            </Description>
          <Body>
            <Input password={true} label="Digite a senha atual" variant="form" placeholder={""}  ></Input>
            <Input password={true} label="Nova senha" variant="form" placeholder={""}  ></Input>
            <Input password={true} label="Confirme a Senha" variant="form" placeholder={""} ></Input>
          </Body>
          <ButtonArea>
            <Button size="small" variant="fill" title="CONFIRMAR">
            </Button>
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
