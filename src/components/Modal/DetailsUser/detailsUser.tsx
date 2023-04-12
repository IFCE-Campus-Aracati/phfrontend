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
import { useNavigate } from "react-router-dom";

export function DetailsUser({ children, tilte }: DetailsUserProps) {
  const navigate = useNavigate();
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
              Email: <Text>mairon.santana.nascimento60@aluno.ifce.edu.br</Text>
            </TextInfo>
            <TextInfo>
              Nome: <Text>Mairon S. Nascimento</Text>
            </TextInfo>
            <TextInfo>
              Cargo: <Text>Aluno</Text>
            </TextInfo>
          </Body>
          <ButtonArea>
            <Button 
            size="medium" 
            variant="fill" 
            title="Editar"
            onClick={() => navigate("/admin/list_users/edit_user")}
            >
              <PencilSimpleLine size={"1.25rem"} color={theme.colors.white} />
            </Button>
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
