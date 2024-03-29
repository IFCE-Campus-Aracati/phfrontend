import { MagnifyingGlass, PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { useNavigate } from "react-router-dom";
import { PrinterProps } from "../../utils/interfaces";
import { Status } from "./../Status";

import { Container, TableContainer, Row, Head, TH, Body, TableData, RowIcons, ButtonIcon } from "./styles";

interface TableProps {
  data: PrinterProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function PrintersTable({
  data = [] as PrinterProps[],
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
                <TableData>{item.type}</TableData>
                <TableData>{item.material}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <Modal data={item} title="Detalhes" variant="detailsPrinters" route="">
                        <ButtonIcon>
                          <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
                    )}
                    {isEdit && (
                      <ButtonIcon onClick={() => navigate(`/admin/list_printers/edit_printer/${item.id}`)}>
                        <PencilSimpleLine size={"1rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                    {isDelete && (
                      <Modal data={item} title="Você deseja excluir?" variant="delete" route="">
                        <ButtonIcon>
                          <Trash size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
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
