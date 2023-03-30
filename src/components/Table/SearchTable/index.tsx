import React from "react";
import { Status } from "../../Status";
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

export interface TableSearchDataProps {
  id: string;
  idSearch: string;
  title: string;
  date: string;
  status: "pending" | "approved" | "decline";
}

interface TableSearchProps {
  data: TableSearchDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function SearchTable({
  data = [] as TableSearchDataProps[],
  header,
  isView = false,
  isDelete = false,
  isEdit = false,
}: TableSearchProps) {
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
                <TableData>{item.idSearch}</TableData>
                <TableData>{item.title}</TableData>
                <TableData>{item.date}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  {isView && (
                    <ButtonIcon onClick={() => alert("FOI")}>
                      <MagnifyingGlass size={"1.5rem"} color={"#FFF"} />
                    </ButtonIcon>
                  )}
                  {isEdit && (
                    <ButtonIcon onClick={() => alert("FOI")}>
                      <PencilSimpleLine size={"1.5rem"} color={"#FFF"} />
                    </ButtonIcon>
                  )}
                  {isDelete && (
                    <ButtonIcon onClick={() => alert("FOI")}>
                      <Trash size={"1.5rem"} color={"#FFF"} />
                    </ButtonIcon>
                  )}
                </TableData>
              </Row>
            );
          })}
        </Body>
      </TableContainer>
    </Container>
  );
}
