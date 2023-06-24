import { ReactNode } from "react";
import { Close, Content, Portal, Root, Trigger, Title } from "../styles";
import {
  ButtonClose,
  ButtonText,
  Header,
  Body,
  TextInfo,
  Text,
  Description,
  ButtonFile,
  ButtonWrapper,
} from "./styles";
import { Download, X } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { useNavigate, useLocation } from "react-router-dom";
import { PrintProps } from "../../../utils/interfaces";

interface DetailsAnonymousProps {
  title: string;
  data: PrintProps;
  value: boolean;
  setValue: (value: boolean) => void;
  children?: React.ReactNode;
}

export function DetailsAnonymous({ children, title, data, value, setValue }: DetailsAnonymousProps) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <Root onOpenChange={setValue} open={value}>
      <Trigger>{children}</Trigger>
      <Portal>
        <Content>
          <Header>
            <Close>
              <ButtonClose onClick={() => (pathname === "/anonymous/search_print" ? null : navigate("/"))}>
                <X size={"1.5rem"} color={theme.colors.white} />
                <ButtonText>Fechar</ButtonText>
              </ButtonClose>
            </Close>
          </Header>
          <Title>{title}</Title>
          <Body>
            <TextInfo>
              <Text>Identificador de busca:</Text> {data.identifier}
            </TextInfo>
            <TextInfo>
              <Text>Titulo:</Text> {data.title}
            </TextInfo>
            <TextInfo>
              <Text>Descrição:</Text>
              <Description>{data.description}</Description>
            </TextInfo>
            <TextInfo>
              <ButtonWrapper>
                <Text>Arquivo Anexado: </Text>
                <ButtonFile disabled>
                  <Download size={20} />
                  {data.archive}.stl
                </ButtonFile>
              </ButtonWrapper>
            </TextInfo>
            <TextInfo>
              <Text>Tipo do Material:</Text> {data.material}
            </TextInfo>
          </Body>
        </Content>
      </Portal>
    </Root>
  );
}
