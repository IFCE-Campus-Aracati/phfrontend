import { MagnifyingGlass, PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { PrintProps } from "../../utils/interfaces";
import { Status } from "./../Status";
import { Modal } from "../Modal";

import { Container, TableContainer, Row, Head, TH, Body, TableData, ButtonIcon } from "./styles";

interface SearchTableProps {
  data: PrintProps;
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function SearchTable({ data, header, isView = false, isDelete = false, isEdit = false }: SearchTableProps) {
  return (
    <Container>
      {!data.identifier ? (
        <div style={{ color: "#FFF", textAlign: "center" }}>Nenhuma impresão encontrada</div>
      ) : (
        <TableContainer>
          <Head>
            <Row>
              {header.map((item) => {
                return <TH>{item}</TH>;
              })}
            </Row>
          </Head>

          <Body>
            <Row key={data.id}>
              <TableData>{data.identifier}</TableData>
              <TableData>{data.title}</TableData>
              <TableData>{data.created_at}</TableData>
              <TableData>
                <Status variant={data.status} />
              </TableData>
              <TableData>
                {isView && (
                  <Modal title={"Detalhes da impressão"} variant="detailsAnonymousTable" route="" data={data}>
                    <ButtonIcon>
                      <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                    </ButtonIcon>
                  </Modal>
                )}
                {isEdit && (
                  <ButtonIcon onClick={() => alert("FOI")}>
                    <PencilSimpleLine size={"1rem"} color={"#FFF"} />
                  </ButtonIcon>
                )}
                {isDelete && (
                  <ButtonIcon onClick={() => alert("FOI")}>
                    <Trash size={"1rem"} color={"#FFF"} />
                  </ButtonIcon>
                )}
              </TableData>
            </Row>
          </Body>
        </TableContainer>
      )}
    </Container>
  );
}
