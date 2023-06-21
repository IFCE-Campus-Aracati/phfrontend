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

interface DetailsPrintersProps {
  printerId: string;
  children: React.ReactNode;
  tilte: string;
}

import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";
import { Status } from "../../Status";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { PrintersTableDataProps } from "../../Table/PrintersTable";
import api from "../../../server/api";
import { 
  Body, 
  TextInfo,
  Text,
  StatusArea,
  ButtonArea
} from "./styles";


export function DetailsPrinters({ printerId, children, tilte }: DetailsPrintersProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [printerData, setPrinterData] = useState<PrintersTableDataProps>();

  useEffect(() => {
    async function getPrinter() {
      try {
        const response = await api.get<PrintersTableDataProps>("/detailsPrinter", {
          headers: { Authorization: `$Bearer ${user?.token}` }
        });

        setPrinterData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getPrinter();

  }, []);
  
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
              Nome: <Text>{printerData?.title}</Text>
            </TextInfo>
            <TextInfo>
              Tipo: <Text>{printerData?.type}</Text>
            </TextInfo>
            <TextInfo>
              Material: <Text>{printerData?.material}</Text>
            </TextInfo>
            <StatusArea>
              <TextInfo>Status:</TextInfo>
              <Status variant={printerData?.status} />
            </StatusArea>
            <TextInfo>
              Descrição:{" "}
              <Text>
                {printerData?.description}
              </Text>
            </TextInfo>
          </Body>
          <ButtonArea>
            <Button
            id={printerData?.id}
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
