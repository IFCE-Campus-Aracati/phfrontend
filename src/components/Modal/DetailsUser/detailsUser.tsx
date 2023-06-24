import React from "react";

import { Root, Trigger, Portal, Overlay, Content, Title, Header, ButtonClose, TextButton, Close } from "../styles";

import { TextInfo, Text, Body, ButtonArea } from "./styles";

import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../../utils/interfaces";

interface DetailsUserProps {
  data: UserProps;
  children: React.ReactNode;
  tilte: string;
}

export function DetailsUser({ data, children, tilte }: DetailsUserProps) {
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
              Nome: <Text>{data.name}</Text>
            </TextInfo>
            <TextInfo>
              Email: <Text>{data.email}</Text>
            </TextInfo>
            <TextInfo>
              Cargo: <Text>{data.role === "admin" ? "Administrador" : "Cliente"}</Text>
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
