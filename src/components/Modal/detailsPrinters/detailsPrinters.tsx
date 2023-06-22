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
import { Status } from "../../Status";
import { useNavigate } from "react-router-dom";
import { Printers, useAuth } from "../../../hooks/auth";
import { PrintersTableDataProps } from "../../Table/PrintersTable";
import api from "../../../server/api";
import {
  Body,
  TextInfo,
  Text,
  StatusArea,
  ButtonArea
} from "./styles";


interface DetailsPrintersProps {
  data: Printers;
  children: React.ReactNode;
  tilte: string;
}

export function DetailsPrinters({ data, children, tilte }: DetailsPrintersProps) {
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
              Nome: <Text>{data?.title}</Text>
            </TextInfo>
            <TextInfo>
              Tipo: <Text>{data?.type}</Text>
            </TextInfo>
            <TextInfo>
              Material: <Text>{data?.material}</Text>
            </TextInfo>
            <StatusArea>
              <TextInfo>Status:</TextInfo>
              <Status variant={data?.status} />
            </StatusArea>
            <TextInfo>
              Descrição:{" "}
              <Text>
                {data?.description}
              </Text>
            </TextInfo>
          </Body>
          <ButtonArea>
            <Button
              id={data?.id}
              size="medium"
              variant="fill"
              title="Editar"
              onClick={() => navigate(`/admin/list_printers/edit_printer/${data.id}`)}
            >
              <PencilSimpleLine size={"1.25rem"} color={theme.colors.white} />
            </Button>
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
