import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
    background: ${theme.colors.background.primary};
    position: relative;
    overflow: auto;
    height: 120vh;
    width: 100vw;
`;
export const SideBar = styled.div`
    height: 100%;
    position: fixed;
`;
export const Content = styled.div``;

export const FormContainer = styled.form`
    background-color: ${theme.colors.background.secondary};  
    position: absolute;
    left: 80px;
    top: 80px;
    padding: 2rem;
    width: 89.3%;
    height: 100vh;
    border-radius: 8px;
    text-align: top;
    margin-left: 1.5rem;
;`

export const Title = styled.h1`
    color: ${theme.colors.white};
    position: absolute;
    top: 35px;
    font-size: 2rem;
    margin-left: 6.5rem;
`;

export const TitleInput = styled.h3`
    color: ${theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const Footer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    margin-left: 7.5rem;
    margin-bottom: 2rem;
`;

export const Attachments = styled.label`
    display: flex;
    gap: 1.5rem;
`;
