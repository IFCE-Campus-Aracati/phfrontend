import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
    width: 100%;
    padding: 1.5rem 3rem;
    background: ${theme.colors.background.primary};
`;
export const Content = styled.div``;

export const FormContainer = styled.form`
    background-color: ${theme.colors.background.secondary};
  top: 80px;
  padding: 2rem;
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
;`

export const ProfileContent = styled.form`
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
`;

export const Title = styled.h1`
    color: ${theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const Subtitle = styled.h3`
  color: ${theme.colors.white};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: left;
`;

export const TitleInput = styled.h3`
    color: ${theme.colors.white};
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 2rem;
`;

export const ImageSide = styled.img`
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 0.2rem;
  height: 18rem;
  width: 15rem;
  object-fit: cover;
`;