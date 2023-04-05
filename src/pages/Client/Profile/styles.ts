import styled from "styled-components";
import { theme } from "../../../styles/theme";

import { Link } from "react-router-dom";

export const Container = styled.div`
  background: ${theme.colors.background.primary};
  position: relative;
  overflow: auto;
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  position: absolute;
  top: 35px;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

export const SideBar = styled.div`
  position: fixed;
`;

export const FormContainer = styled.div`
  background-color: ${theme.colors.background.secondary};  
  position: absolute;
  top: 80px;
  padding: 2rem;
  width: 88vw;
  height: 80%;
  border-radius: 8px;
  text-align: top;
  margin-left: 1.5rem;
`;

export const TitleInput = styled.h2`
  color: ${theme.colors.white};
  font-size: 1rem;
  margin-bottom: 1.4rem;
  margin-top: 0.25rem;
  text-align: left;
`;

export const Subtitle = styled.h3`
  color: ${theme.colors.white};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.4rem;
  margin-bottom: 2.5rem;
  text-align: left;
`;

export const Content = styled.main`
`;

export const ImageSide = styled.img`
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 0.2rem;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50vh;
  width: 20vw;
  object-fit: cover;
  margin-left: 10rem;
  margin-top: -10rem;
`;

export const Attachments = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 1.0rem;
  padding: 1rem;
  margin-left: 50.5rem;
  margin-top: 29rem;
`;

export const Pass = styled.div`
  margin-left: 8rem;
  margin-top: -6rem;
`;