import React from "react";

import { Status } from "./../Status";

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
import { useNavigate } from "react-router-dom";

export interface ClientListTableDataProps {
  id: string;
  title: string;
  date: string;
  status: "pending" | "approved" | "decline";
}

interface TableProps {
  data: ClientListTableDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function ClientListTable({
  data = [] as ClientListTableDataProps[],
  header,
  isView = false,
  isDelete = false,
  isEdit = false,
}: TableProps) {
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
              <Row>
                <TableData>{item.title}</TableData>
                <TableData>{item.date}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <ButtonIcon onClick={() => alert("FOI")}>
                        <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                    {isEdit && (
                      <ButtonIcon onClick={() => navigate("/client/edit_print")}>
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
