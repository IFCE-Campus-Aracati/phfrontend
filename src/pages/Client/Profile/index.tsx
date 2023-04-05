import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { Form } from "react-router-dom";
import { InputFile } from "../../../components/InputFile";
import { useNavigate } from "react-router-dom";
import { Container, Content, FormContainer, Title, Subtitle, TitleInput, ImageSide, Attachments, Pass} from "./styles";
import Modal from "react-modal";
import { Input } from "../../../components/Input";
import { SideBar } from "../../../components/SideBar";
import DefaultProfile from "../../../assets/default-profile.jpeg";


Modal.setAppElement("#root");

export function ModalEditPass(){
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () =>{
    setModalIsOpen(true);
  };

  const closeModal = () =>{
    setModalIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Alterar Senha</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Title>Alteração de Senha</Title>
        <Subtitle>Sua senha deve conter no mínimo 8 e no máximo 70 caracteres</Subtitle>
        <Input password={true} label="Digite a senha atual" variant="form" placeholder={""}  ></Input>
        <Input password={true} label="Nova senha" variant="form" placeholder={""}  ></Input>
        <Input password={true} label="Confirme a senha" variant="form" placeholder={""} ></Input>
        <Button size="xlarge" variant="fill" title="CONFIRMAR" />
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export function Profile(){
  const navigate = useNavigate();

  return(
    <Container>
        <Content>
          <Title>Perfil</Title> 

          <FormContainer>
            <TitleInput>Nome</TitleInput>
            <Subtitle>Gabriel Moura</Subtitle>

            <TitleInput>Email</TitleInput>
            <Subtitle>gabriel.moura22@aluno.ifce.edu.br</Subtitle>

            <TitleInput>Cargo</TitleInput>
            <Subtitle>bolsista</Subtitle>

            <TitleInput>Senha</TitleInput>
            <Subtitle>************</Subtitle>
              <Pass>
                <Button 
              title="alterar senha" 
              variant="outline" 
              size="small" 
              onClick={() => navigate("/")}
              />
              </Pass>
          </FormContainer>
        <ImageSide src={DefaultProfile} />
        </Content>
      <Attachments>
            <InputFile label={"Anexar"}/>
            <Button 
            title="X" 
            variant="outline" 
            size="small" 
            onClick={() => navigate("/")}
            />
      </Attachments>
    </Container>
  );
}