import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
    background: ${theme.colors.background.primary};
    position: relative;
    overflow: auto;
    height: 120vh;
    width: 100%;
`;
export const SideBar = styled.div`
    position: fixed;
`;
export const Content = styled.div``;

export const FormContainer = styled.form`
    background-color: ${theme.colors.background.secondary};  
    position: absolute;
    top: 80px;
    padding: 2rem;
    width: 88vw;
    height: 100vh;
    border-radius: 8px;
    text-align: top;
    margin-left: 1.5rem;
;`

export const Title = styled.h1`
    color: ${theme.colors.white};
    position: absolute;
    font-size: 1.5rem;
    margin-left: 1.5rem;
    margin-top: 2.25rem;
`;

export const TitleInput = styled.h3`
    color: ${theme.colors.white};
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 0.80rem;
`;

export const Footer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    bottom: 0;
    padding: 1rem;
    margin-left: 2.5rem;
    margin-bottom: 4.5rem;
`;

export const Attachments = styled.label`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.2rem;
`;
