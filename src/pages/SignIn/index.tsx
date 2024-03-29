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
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import { object, string, ValidationError } from "yup";
import { Loading } from "../../components/Loading";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      const schema = object().shape({
        password: string().required("Senha é obrigatória"),
        email: string().required("Email é obrigatório").email("Digite um email válido"),
      });

      await schema.validate({ email, password });
      await signIn(email, password);
    } catch (error) {
      if (error instanceof ValidationError) {
        return toast.error(error.message);
      }
      return toast.error("Não foi possível realizar o login.");
    }
  }

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
          <Input
            label="E-mail"
            variant="form"
            placeholder="seuEmail@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            password={true}
            label="Senha"
            variant="form"
            placeholder={""}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SmallLinkButton to={"/"}>
            <TextLink>Esqueceu a senha?</TextLink>
          </SmallLinkButton>
          <Button size="xlarge" variant="fill" title="Entrar" onClick={() => handleSignIn()} />
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
