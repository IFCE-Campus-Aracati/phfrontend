import { Button } from "../../../../components/Button";
import { RadioGroup } from "../../../../components/RadioGroup";
import { Container, Content, Footer, FormContainer, Title, TitleInput, StatusContainer, ProfileContent, ImageContent, ImageSide, Subtitle } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import DefaultProfile from "../../../../assets/default-profile.jpeg"
import { useEffect, useState } from "react";
import api from "../../../../server/api";
import { useAuth } from "../../../../hooks/auth";
import { UserProps } from "../../../../components/Table/UserTable";

const userRole = [
  { value: 'admin', text: 'Administrador' },
  { value: 'client', text: 'Estudante' },
]

export function EditUser() {
  const { user, updateRole } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserProps>();
  const [userRoleData, setUserRoleData] = useState<string>('');


  async function handleUpdateRole(event: any) {
    try {
      event.preventDefault();
      const userId = userData?.id;
      if (userId) {
        await updateRole({ id: userId, role: userRoleData })
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/viewUser/${id}`, {
          headers: { Authorization: `$Bearer ${user?.token}` },
        });

        setUserData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [])

  console.log(id);

  if (isLoading) {
    return (
      <div>carregando</div>
    )
  }

  return (
    <Container>
      <Content>
        <Title>Editar Usuário</Title>

        <FormContainer>
          <ProfileContent>
            <TitleInput>Nome:</TitleInput>
            <Subtitle>{userData?.name}</Subtitle>

            <TitleInput>Email:</TitleInput>
            <Subtitle>{userData?.email}</Subtitle>
            <TitleInput>Cargo</TitleInput>
            <StatusContainer>
              <RadioGroup
                options={userRole}
                defaultValue={userData?.role}
                onValueChange={setUserRoleData}
              />
            </StatusContainer>
            <Footer>
              <Button
                title="cancelar"
                variant="outline"
                size="small"
                onClick={() => navigate("/admin/list_users")}
              />
              <Button
                title="SALVAR"
                variant="fill"
                size="small"
                onClick={handleUpdateRole}
              />
            </Footer>
          </ProfileContent>
          <ImageContent>
            <ImageSide src={DefaultProfile} />
          </ImageContent>
        </FormContainer>
      </Content>
    </Container>
  );
}