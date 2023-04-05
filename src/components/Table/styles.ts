import styled from "styled-components";
import { theme } from "./../../styles/theme";

export const Container = styled.div`
  flex: 1;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.5rem;
  padding: 0 1.5rem;
`;

export const Row = styled.tr`
  gap: 1.5rem;
`;

export const Head = styled.thead`
  color: ${theme.colors.white};
  font-size: 1rem;
`;

export const TH = styled.th``;

export const Body = styled.tbody`
  background-color: ${theme.colors.background.secondary};
`;

export const TableData = styled.td`
  color: ${theme.colors.white};
  text-align: center;
  padding: 0.5rem 0;
  width: 20%;
  font-size: 0.8rem;

  :first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const RowIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const ButtonIcon = styled.button`
  background-color: ${theme.colors.blue.light};
  border: none;
  line-height: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 0.2rem;

  :hover {
    background-color: ${theme.colors.blue.dark};
    transition: 0.2s;
    cursor: pointer;
  }
`;
