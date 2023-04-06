import { useNavigate } from "react-router-dom";
import {
  Body,
  Container,
  FormContainer,
  HeaderNavigation,
  ImageSide,
  LinkButton,
  SmallLinkButton,
  SubTitle,
  Text,
  TextContainer,
  TextLink,
  Title,
} from "./styles";

import HomeImage from "../../assets/home-image.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
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
          <SubTitle>Login</SubTitle>
          <Input label="E-mail" variant="form" placeholder="meumelhoremail@gmail.com" ></Input>
          <Input password={true} label="Senha" variant="form" placeholder={""}  ></Input>
          <SmallLinkButton to={"/"}>
            <TextLink>Esqueceu a senha?</TextLink>
          </SmallLinkButton>
          <Button size="xlarge" variant="fill" title="Entrar" onClick={() => navigate("/admin/list_prints")} />
          <TextContainer>
            <Text>Não possui uma conta ainda?</Text>
            <SmallLinkButton to={"/signup"}>
              <TextLink>Registre-se aqui</TextLink>
            </SmallLinkButton>
          </TextContainer>
        </FormContainer>
      </Body>

      <ImageSide src={HomeImage} />
    </Container>
  );
}