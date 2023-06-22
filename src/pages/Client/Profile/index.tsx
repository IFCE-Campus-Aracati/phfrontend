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
  ButtonEdit,
  ProfileContent,
  ImageContent,
  ButtonIcon,
  ButtonRemove
} from "./styles";

import DefaultProfile from "../../../assets/default-profile.jpeg";
import { Modal } from "../../../components/Modal";
import { UploadSimple, X } from "@phosphor-icons/react";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";
import { UserTableDataProps } from "../../../components/Table/UserTable";

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState<UserTableDataProps>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProfileData() {
      try {
        const response = await api.get(`/detailsUser`, {
          headers: { Authorization: `$Bearer ${user?.token}` },
        });
        setProfileData(response.data);

      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getProfileData();
  }, [])

  if (isLoading) {
    return (
      <div>carregando</div>
    )
  }

  return (
    <Container>
      <Content>
        <Title>Perfil</Title>

        <FormContainer>
          <ProfileContent>
            <TitleInput>Nome:</TitleInput>
            <Subtitle>{profileData?.name}</Subtitle>

            <TitleInput>Email:</TitleInput>
            <Subtitle>{profileData?.email}</Subtitle>

            <TitleInput>Cargo:</TitleInput>
            <Subtitle>{profileData?.role}</Subtitle>

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