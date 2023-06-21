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
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import { object, string, ref, ValidationError } from "yup";

export function SignUp() {
  const { signUp } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp() {
    try {
      const schema = object().shape({
        name: string().required('Nome é obrigatório.'),
        email: string()
          .required('Email é obrigatório.')
          .email('Digite um email válido.'),
        password: string().required('Senha é obrigatória.'),
        confirmPassword: string().oneOf([ref('password')], 'As senha são diferentes.').required('É necessário confirmar a senha.')
      })

      await schema.validate({ name, email, password, confirmPassword });

      await signUp(email, name, password);
    } catch (error) {
      if (error instanceof ValidationError) {
        return toast.error(error.message);
      }
      return toast.error("Não foi possível realizar o cadastro.");
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
          <SubTitle>Cadastre-se</SubTitle>
          <Input
            label="Nome"
            variant="form"
            value={name}
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="E-mail"
            variant="form"
            value={email}
            placeholder="meuemail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            password={true}
            label="Senha"
            variant="form"
            placeholder={"Informe sua senha"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            password={true}
            label="Confirmar Senha"
            variant="form"
            placeholder={"Repita sua senha"}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button size="xlarge" variant="fill" title="Cadastrar" onClick={() => handleSignUp()} />
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
