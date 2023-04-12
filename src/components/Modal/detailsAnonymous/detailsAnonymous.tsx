import { ReactNode } from "react";
import { Close, Content, Portal, Root, Trigger, Title } from "../styles";
import { ButtonClose, ButtonText, Header, Body, TextInfo, Text, Description, ButtonFile, ButtonWrapper } from './styles';
import { Download, X } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";


interface DetailsAnonymousProps {
  children: ReactNode;
  title: string;
}

export function DetailsAnonymous({ children, title } : DetailsAnonymousProps) {
  return(
    <Root>
        <Trigger>{children}</Trigger>
      <Portal>
        <Content>
            <Header>
                <Close>
                  <ButtonClose>
                    <X size={"1.5rem"} color={theme.colors.white}/>
                    <ButtonText>Fechar</ButtonText>
                  </ButtonClose>
                </Close>
            </Header>
            <Title>{title}</Title>
            <Body>
                <TextInfo>
                <Text>Identificador de busca:</Text> 00000000
                </TextInfo>
                <TextInfo>
                <Text>Titulo:</Text> Peça de Xadrez
                </TextInfo>
                <TextInfo>
                  <Text>Descrição:</Text>
                  <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis bibendum augue, id sodales nunc. 
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Etiam consectetur pulvinar nisi, ac malesuada tortor lobortis quis.
                  Nunc non tellus eu est vulputate pellentesque. Cras turpis lorem, fringilla quis libero eget.
                  </Description>
                </TextInfo>
                <TextInfo>
                  <ButtonWrapper>
                  <Text>Arquivo Anexado: </Text>
                  <ButtonFile onClick={() => console.log('clicou')}>
                    <Download size={20}/>
                    arquivo.stl
                  </ButtonFile>
                  </ButtonWrapper>
                </TextInfo>
                <TextInfo>
                <Text>Tipo do Material:</Text> ABS
                </TextInfo>
            </Body>
        </Content>
      </Portal>
    </Root>
  );
}