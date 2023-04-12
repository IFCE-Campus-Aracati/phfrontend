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



interface DetailsPrintersProps {
  children: React.ReactNode;
  tilte: string;
}

import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";
import { Status } from "../../Status";
import { Body, ButtonArea, StatusArea, Text, TextInfo } from "./styles";
import { useNavigate } from "react-router-dom";


export function DetailsPrinters({ children, tilte }: DetailsPrintersProps) {
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
              Nome: <Text>Impressora 1</Text>
            </TextInfo>
            <TextInfo>
              Tipo: <Text>Impressora 3D</Text>
            </TextInfo>
            <TextInfo>
              Material: <Text>ABS</Text>
            </TextInfo>
            <StatusArea>
              <TextInfo>Status:</TextInfo>
              <Status variant="approved" />
            </StatusArea>
            <TextInfo>
              Descrição:{" "}
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
                bibendum augue, id sodales nunc. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Etiam
                consectetur pulvinar nisi, ac malesuada tortor lobortis quis.
                Nunc non tellus eu est vulputate pellentesque. Cras turpis
                lorem, fringilla quis libero eget.
              </Text>
            </TextInfo>
          </Body>
          <ButtonArea>
            <Button 
            size="medium" 
            variant="fill" 
            title="Editar"
            onClick={() => navigate("/admin/list_printers/edit_printer")}
            >
              <PencilSimpleLine size={"1.25rem"} color={theme.colors.white} />
            </Button>
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
