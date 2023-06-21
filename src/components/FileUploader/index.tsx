import styled from "styled-components";
import { Paperclip } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";
import React, { useState } from 'react';
import {FileUploadButton, RemoveButton, HiddenFileInput } from "./styles";
import { X } from "@phosphor-icons/react";


export const FileUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [inputKey, setInputKey] = useState(Date.now());
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
  
      if (file && file === selectedFile) {
        setInputKey(Date.now());
      } else {
        setSelectedFile(file);
      }
    };
  
    const handleRemoveFile = () => {
      setSelectedFile(null);
      setInputKey(Date.now());
    };
  
    return (
      <>
        <HiddenFileInput
          key={inputKey}
          id="file-upload"
          onChange={handleFileChange}
        />
        <FileUploadButton htmlFor="file-upload">
          <Paperclip 
            size={"1rem"}
            weight="bold"
            color={theme.colors.white} />
          {selectedFile ? selectedFile.name : 'Anexar'}
        </FileUploadButton>
        {selectedFile && (
          <RemoveButton onClick={handleRemoveFile}>
            <X 
              size={"1rem"}
              color={"#00000"} />
          </RemoveButton>
        )}
      </>
    );
  };
  
  export default FileUploader;
  