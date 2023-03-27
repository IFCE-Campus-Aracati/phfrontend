import { useNavigate } from "react-router-dom";
import { Logo } from "../Home/styles";
import {
  Body,
  Container,
  FormContainer,
  HeaderNavigation,
  ImageSide,
  LinkButton,
  SmallLinkButton,
  SubTitle,
  TextContainer,
  TextLink,
  Title,
  Text,
} from "./styles";

import HomeImage from "../../assets/home-image.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const navigate = useNavigate();

  return (
    <Container>
      <Body>
        <HeaderNavigation>
          <LinkButton to={"/"}>
            <TextLink>Voltar</TextLink>
          </LinkButton>
        </HeaderNavigation>
        <FormContainer>
            <Title>Printer Hub</Title>
            <SubTitle>Cadastre-se</SubTitle>
          <Input label="Nome" variant="form" placeholder="Fulano da Silva" ></Input>
          <Input label="E-mail" variant="form" placeholder="meumelhoremail@gmail.com" ></Input>
          <Input password={true} label="Senha" variant="form" placeholder={""}  ></Input>
          <Input password={true} label="Confirmar Senha" variant="form" placeholder={""} ></Input>
          <Button size="xlarge" variant="fill" title="Cadastrar" />
          <TextContainer>
            <Text>Já possui uma conta?</Text>
            <SmallLinkButton to={"/signin"}>
              <TextLink>Acesse aqui</TextLink>
            </SmallLinkButton>
          </TextContainer>
        </FormContainer>
      </Body>

      <ImageSide src={HomeImage} />
    </Container>
  );
}