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
import { Modal } from "../Modal";

export interface ListTableDataProps {
  id: string;
  title: string;
  owner: string;
  date: string;
  status: "pending" | "approved" | "decline";
}

interface TableProps {
  data: ListTableDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function ListTable({
  data = [] as ListTableDataProps[],
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
                <TableData>{item.owner}</TableData>
                <TableData>{item.date}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <Modal
                        title="Deatalhes"
                        variant="detailsPrint"
                        route={"/admin/list_prints/edit_print"}
                      >
                        <ButtonIcon>
                          <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
                    )}
                    {isEdit && (
                      <ButtonIcon
                        onClick={() =>
                          navigate("/admin/list_prints/edit_print")
                        }
                      >
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
