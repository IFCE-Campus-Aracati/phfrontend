import { Button } from "../../../components/Button";
import { InputFile } from "../../../components/InputFile";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  FormContainer,
  Title,
  Subtitle,
  TitleInput,
  ImageSide,
  Attachments,
  Pass,
  ProfileContent,
  ImageContent,
  ButtonIcon,
  ButtonRemove
} from "./styles";
import DefaultProfile from "../../../assets/default-profile.jpeg";
import { UploadSimple, X } from "@phosphor-icons/react";

export function Profile() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Perfil</Title>

        <FormContainer>
          <ProfileContent>
            <TitleInput>Nome:</TitleInput>
            <Subtitle>Gabriel Moura</Subtitle>

            <TitleInput>Email:</TitleInput>
            <Subtitle>gabriel.moura22@aluno.ifce.edu.br</Subtitle>

            <TitleInput>Cargo:</TitleInput>
            <Subtitle>bolsista</Subtitle>

            <TitleInput>Senha:</TitleInput>
            <Subtitle>************</Subtitle>
            <Pass>
              <Button
                title="alterar senha"
                variant="outline"
                size="small"
                onClick={() => navigate("/")}
              />
            </Pass>
          </ProfileContent>
          <ImageContent>
            <ImageSide src={DefaultProfile} />
            <Attachments>
              <ButtonIcon>
                <UploadSimple size={"1rem"} color={"#FFF"} />
              </ButtonIcon>
              <ButtonRemove>
                <X size={"1rem"} color={"#FFF"} />
              </ButtonRemove>
            </Attachments>
          </ImageContent>
        </FormContainer>
      </Content>
    </Container>
  );
}