import React, { useEffect, useState } from "react";

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Header,
  ButtonClose,
  TextButton,
  Close,
} from "../styles";
import { X, PencilSimpleLine } from "@phosphor-icons/react";
import { theme } from "../../../styles/theme";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { ButtonArea, Body } from "./styles";
import { useAuth } from "../../../hooks/auth";
import { object, string, ref, ValidationError } from "yup";
import { toast } from "react-toastify";

interface ChangePassword {
  children: React.ReactNode;
  tilte: string;
}

export function ChangePassword({ children, tilte }: ChangePassword) {
  const { changePassword } = useAuth();

  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  async function handleChangePassword() {
    try {
      const schema = object().shape({
        confirmPassword: string()
          .oneOf([ref("password")], "As senha são diferentes.")
          .required("É necessário confirmar a senha nova."),
        password: string().required("Informar a senha nova é obrigatória."),
        oldPassword: string().required("Informar a senha antiga é obrigatório"),
      });

      await schema.validate({ oldPassword, password, confirmPassword });

      await changePassword({ oldPassword, password });
      setIsOpen(false);
    } catch (error) {
      if (error instanceof ValidationError) {
        return toast.error(error.message);
      }
      return toast.error("Não foi possivel realizar a mudança de senha");
    }
  }

  return (
    <Root onOpenChange={setIsOpen} open={isOpen}>
      <Trigger>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Header>
            <Close>
              <ButtonClose>
                <TextButton>Fechar</TextButton>
                <X size={"2rem"} color={theme.colors.white} />
              </ButtonClose>
            </Close>
          </Header>
          <Title>{tilte}</Title>
          <Description>Sua senha deve conter no mínimo 8 e no máximo 70 caracteres.</Description>
          <Body>
            <Input
              password={true}
              label="Digite a senha atual"
              variant="form"
              placeholder={""}
              onChange={(e) => setOldPassword(e.target.value)}
            ></Input>
            <Input
              password={true}
              label="Nova senha"
              variant="form"
              placeholder={""}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Input
              password={true}
              label="Confirme a Senha"
              variant="form"
              placeholder={""}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </Body>
          <ButtonArea>
            <Button size="small" variant="fill" title="CONFIRMAR" onClick={handleChangePassword} />
          </ButtonArea>
        </Content>
      </Portal>
    </Root>
  );
}
