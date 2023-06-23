import React, { useEffect } from "react";

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
import { theme } from "../../../styles/theme";
import {
  Body,
  ButtonArea,
  StatusArea,
  Text,
  TextInfo,
  RowTextInfo,
} from "./styles";
import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { Status } from "../../Status";
import { Button } from "../../Button";
import { useNavigate, useLocation } from "react-router-dom";
import { Prints } from "../../../hooks/auth";

interface DetailsPrintsProps {
  children: React.ReactNode;
  title: string;
  route: string;
  data: Prints;
}

export function DetailsPrint({ children, title, route, data }: DetailsPrintsProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("PATH:", pathname);
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
          <Title>{title}</Title>
          <Body>
            <RowTextInfo>
              <TextInfo>
                Emissor: <Text>{data.owner?.name}</Text>
              </TextInfo>
              <TextInfo>
                Data de emissão: <Text>{data?.created_at}</Text>
              </TextInfo>
            </RowTextInfo>

            <TextInfo>
              Título: <Text>{data?.title}</Text>
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

            <RowTextInfo>
              <TextInfo>Arquivo anexado: </TextInfo>
              <Button size="medium" variant="fill" title="arquivo.stl" />
            </RowTextInfo>

            <TextInfo>
              Tipo de material: <Text>{data?.material}</Text>
            </TextInfo>
          </Body>
          <ButtonArea>
            <Button
              size="medium"
              variant="fill"
              title="Editar"
              onClick={() => navigate(route)}
            >
              <PencilSimpleLine size={"1.25rem"} color={theme.colors.white} />
            </Button>
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
