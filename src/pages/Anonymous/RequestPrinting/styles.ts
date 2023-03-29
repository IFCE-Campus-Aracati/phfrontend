import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
    width: 100%;
    padding: 3rem 1.5rem;
    background: ${theme.colors.background.primary};
`;

export const Content = styled.div``;

export const FormContainer = styled.form``;

export const Title = styled.h1`
    color: ${theme.colors.white};
    font-size: 2rem;
    margin-bottom: 2.5rem;
`;

export const TitleInput = styled.h3`
    color: ${theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    margin-top: 2.25rem;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 2.25rem;
    margin-bottom: 5rem;
`;