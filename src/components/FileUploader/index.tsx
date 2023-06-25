import styled from "styled-components";
import { Paperclip } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";
import React, { useState } from "react";
import { FileUploadButton, RemoveButton, HiddenFileInput } from "./styles";
import { X } from "@phosphor-icons/react";

interface FileUploaderProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile: (e: React.MouseEvent) => void;
  nameFile: string;
}

export function FileUploader({ onFileChange, handleRemoveFile, nameFile }: FileUploaderProps) {
  const [inputKey, setInputKey] = useState(Date.now());

  return (
    <>
      <HiddenFileInput key={inputKey} id="file-upload" onChange={onFileChange} accept=".stl" />
      <FileUploadButton htmlFor="file-upload">
        <Paperclip size={"1rem"} weight="bold" color={theme.colors.white} />
        {nameFile !== "" ? nameFile : "Anexar"}
      </FileUploadButton>
      {nameFile && (
        <RemoveButton onClick={handleRemoveFile}>
          <X size={"1rem"} color={"#00000"} />
        </RemoveButton>
      )}
    </>
  );
}
