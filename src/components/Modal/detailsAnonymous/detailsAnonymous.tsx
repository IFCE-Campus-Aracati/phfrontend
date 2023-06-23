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
import { useNavigate } from "react-router-dom";

export interface DateProps {
  id: string;
  identifier: string;
  title: string;
  description: string;
  status: string;
  material: string;
  archive: string;
  printing_date: null;
  printing_duration: null;
  created_at: string;
  updated_at: string;
  owner_id: null;
  printer_id: null;
}

interface DetailsAnonymousProps {
  title: string;
  data: DateProps;
  value: boolean;
  setValue: (value: boolean) => void;
  // children: React.ReactNode;
}

export function DetailsAnonymous({ title, data, value, setValue }: DetailsAnonymousProps) {
  const navigate = useNavigate();

  return (
    <Root onOpenChange={setValue} open={value}>
      {/* <Trigger>{children}</Trigger> */}
      <Portal>
        <Content>
          <Header>
            <Close>
              <ButtonClose onClick={() => navigate("/")}>
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
