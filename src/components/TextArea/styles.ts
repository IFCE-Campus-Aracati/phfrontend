import styled from "styled-components";

export const Container = styled.div``;

export const TextAreaContainer = styled.textarea`
  height: 9rem;
  max-width: 100%;
  width: 500px;
  resize: none;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 0.875rem 0.5rem;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
