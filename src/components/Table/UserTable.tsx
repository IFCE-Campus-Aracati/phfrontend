import React from "react";

import {
  Container,
  TableContainer,
  Row,
  Head,
  TH,
  Body,
  TableData,
  RowIcons,
  ButtonIcon,
} from "./styles";

import {
  MagnifyingGlass,
  PencilSimpleLine,
  Trash,
} from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { useNavigate } from "react-router-dom";

export interface UserTableDataProps {
  id: string;
  name: string;
  email: string;
  role: string;
  profile_photo: string;
}

interface UserTableProps {
  data: UserTableDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function UserTable({
  data = [] as UserTableDataProps[],
  header,
  isView = false,
  isDelete = false,
  isEdit = false,
}: UserTableProps) {
  const navigate = useNavigate();
  return (
    <Container>
      <TableContainer>
        <Head>
          <Row>
            {header.map((item) => {
              return <TH>{item}</TH>;
            })}
          </Row>
        </Head>

        <Body>
          {data.map((item) => {
            return (
              <Row key={item.id}>
                <TableData>{item.name}</TableData>
                <TableData>{item.email}</TableData>
                <TableData>{item.role}</TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <Modal title="Detalhes" variant="detailsUser" route="">
                        <ButtonIcon>
                          <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
                    )}
                    {isEdit && (
                      <ButtonIcon onClick={() => navigate(`/admin/list_users/edit_user/${item.id}`)}>
                        <PencilSimpleLine size={"1rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                    {isDelete && (
                      <ButtonIcon onClick={() => alert("FOI")}>
                        <Trash size={"1rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                  </RowIcons>
                </TableData>
              </Row>
            );
          })}
        </Body>
      </TableContainer>
    </Container>
  );
}
