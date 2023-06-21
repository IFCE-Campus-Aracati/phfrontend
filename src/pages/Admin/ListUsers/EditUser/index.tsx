import { Button } from "../../../../components/Button";
import { RadioGroup } from "../../../../components/RadioGroup";
import { Container, Content, Footer, FormContainer, Title, TitleInput, StatusContainer, ProfileContent, ImageContent, ImageSide, Subtitle } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import DefaultProfile from "../../../../assets/default-profile.jpeg"

const userRole = [
  { value: 'admin', text: 'Administrador' },
  { value: 'client', text: 'Estudante' },
]

export function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  return (
    <Container>
      <Content>
        <Title>Editar Usuário</Title>

        <FormContainer>
          <ProfileContent>
            <TitleInput>Nome:</TitleInput>
            <Subtitle>Gabriel Moura</Subtitle>

            <TitleInput>Email:</TitleInput>
            <Subtitle>gabriel.moura22@aluno.ifce.edu.br</Subtitle>
            <TitleInput>Cargo</TitleInput>
            <StatusContainer>
              <RadioGroup
                options={userRole}
                onValueChange={() => { }}
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
                onClick={() => navigate("/admin/list_users")}
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