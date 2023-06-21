import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
    width: 100%;
    padding: 1.5rem 3rem;
    background: ${theme.colors.background.primary};
`;
export const SideBar = styled.div`
    position: fixed;
`;
export const Content = styled.div``;

export const FormContainer = styled.form`
    background-color: ${theme.colors.background.secondary};
    top: 80px;
    padding: 2rem;
    width: 100%;
    height: auto;
    border-radius: 8px;
    text-align: top;
;`

export const Title = styled.h1`
    color: ${theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const TitleInput = styled.h3`
    color: ${theme.colors.white};
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 2rem;
`;

export const Attachments = styled.label`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.2rem;
`;
export const ButtonFile = styled.div`
`;
