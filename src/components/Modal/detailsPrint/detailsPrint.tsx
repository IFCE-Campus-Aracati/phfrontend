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

interface DetailsPrintsProps {
  children: React.ReactNode;
  tilte: string;
  route: string;
}

export function DetailsPrint({ children, tilte, route }: DetailsPrintsProps) {
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
          <Title>{tilte}</Title>
          <Body>
            <RowTextInfo>
              <TextInfo>
                Emissor: <Text>Gabriel</Text>
              </TextInfo>
              <TextInfo>
                Data de emissão: <Text>05/02/2023</Text>
              </TextInfo>
            </RowTextInfo>

            <TextInfo>
              Título: <Text>Peça de xadrez</Text>
            </TextInfo>
            <StatusArea>
              <TextInfo>Status:</TextInfo>
              <Status variant="pending" />
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

            <RowTextInfo>
              <TextInfo>Arquivo anexado: </TextInfo>
              <Button size="medium" variant="fill" title="arquivo.stl" />
            </RowTextInfo>

            <TextInfo>
              Tipo de material: <Text>ABS</Text>
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
