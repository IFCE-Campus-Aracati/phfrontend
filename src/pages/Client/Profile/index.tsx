import {
  Container,
  Content,
  FormContainer,
  Title,
  Subtitle,
  TitleInput,
  ImageSide,
  Attachments,
  ButtonEdit,
  ProfileContent,
  ImageContent,
  ButtonIcon,
  ButtonRemove,
} from "./styles";

import { useEffect } from "react";
import DefaultProfile from "../../../assets/default-profile.jpeg";
import { Modal } from "../../../components/Modal";
import { UploadSimple, X } from "@phosphor-icons/react";
import { useAuth } from "../../../hooks/auth";
import { Loading } from "../../../components/Loading";

export function Profile() {
  const { getUserProfileData, userProfileData, loadingRequest } = useAuth();

  useEffect(() => {
    getUserProfileData();
  }, []);

  if (loadingRequest) {
    return <Loading />;
  }

  return (
    <Container>
      <Content>
        <Title>Perfil</Title>

        <FormContainer>
          <ProfileContent>
            <TitleInput>Nome:</TitleInput>
            <Subtitle>{userProfileData.name}</Subtitle>

            <TitleInput>Email:</TitleInput>
            <Subtitle>{userProfileData.email}</Subtitle>

            <TitleInput>Cargo:</TitleInput>
            <Subtitle>{userProfileData.role}</Subtitle>

            <TitleInput>Senha:</TitleInput>
            <Subtitle>************</Subtitle>

            <ButtonEdit>
              <Modal data={undefined} route="" title="Alterar senha" variant="changePassword">
                <span>alterar senha</span>
              </Modal>
            </ButtonEdit>
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
