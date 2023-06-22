import { Container, TextContainer } from "./styles";

interface PaginationProps {
  finalPage: number;
  currentPage?: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}


export function Pagination({
  finalPage,
  currentPage,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {




  return (
    <Container >
      <button
        onClick={onPreviousPage}
        disabled={
          currentPage === 1 ? true : false
        }
      >{'<'}</button>
      <TextContainer>{currentPage}</TextContainer>
      <button
        onClick={onNextPage}
        disabled={
          currentPage === finalPage ? true : false
        }
      >{'>'}</button>
    </Container>
  );
}