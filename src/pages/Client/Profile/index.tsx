import { useNavigate } from "react-router-dom";

import {
  Container,
  Content,
  FormContainer,
  Title,
  Subtitle,
  TitleInput,
  ButtonEdit,
  ProfileContent,
} from "./styles";

import { Modal } from "../../../components/Modal";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";
import { UserProps } from "../../../components/Table/UserTable";
import UploadImage from "../../../components/UploadImage";

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<UserProps>();
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
      <div>Carregando Perfil...</div>
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
            <UploadImage/>
        </FormContainer>
      </Content>
    </Container>
  );
}
export default Profile;
