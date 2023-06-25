import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { Pagination } from "../../../components/Pagination";
import { EmpytRegister, EmpytRegisterText } from "../../Client/MyPrints/styles";
import { Loading } from "../../../components/Loading";
import { EmpytTable } from "../../../components/EmpytTable";

const header = ["Nome", "Tipo", "Material", "Status", "Detalhes"];

export function ListPrinters() {
  const { totalPages, getPrinters, printers, loadingRequest } = useAuth();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);

  async function handlePreviousPage() {
    await getPrinters(currentPage - 1).then(() => {
      setCurrentPage(currentPage - 1);
    });
  }

  async function handleNextPage() {
    await getPrinters(currentPage + 1).then(() => {
      setCurrentPage(currentPage + 1);
    });
  }

  useEffect(() => {
    getPrinters(1);
  }, []);

  if (loadingRequest) {
    return <Loading />;
  }

  return (
    <Container>
      <Title>Lista de Impressoras</Title>
      <Row>
        <Input variant="search" placeholder="Buscar impressora" />
        <Button
          size="medium"
          title="Adicionar impressora"
          variant="outline"
          onClick={() => navigate("/admin/list_printers/register_printer")}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>
      {printers.length >= 1 ? (
        <>
          <Table data={printers} header={header} variant="printers" />
          <Pagination
            currentPage={currentPage}
            finalPage={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <EmpytTable text="Nenhuma impressora foi criada" />
      )}
    </Container>
  );
}
