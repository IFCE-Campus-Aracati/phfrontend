import React, { useState } from 'react';
import { UploadSimple, X } from "@phosphor-icons/react";
import { ButtonIcon, ButtonRemove, HiddenUploadImage, ImageSide, ImageContent, Attachments} from "./styles";
import DefaultProfile from "../../../src/assets/default-profile.jpeg";
import api from '../../server/api';
import { useAuth } from '../../hooks/auth';
import { contextType } from 'react-modal';
import { toast } from 'react-toastify';
export const UploadImage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputKey, setInputKey] = useState(Date.now());

  const {user} = useAuth()

  async function handleUploadPhoto(file : File | null){
    try{
      const response = await api.put('/updateUserPhoto', {"file" : file}, {
        headers: { Authorization: `Bearer ${user?.token}` ,'Content-Type': 'multipart/form-data'}
      }).then(()=>{
        setSelectedFile(file);
        toast.success("Imagem alterada com sucesso!");
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file && file === selectedFile) {
      setInputKey(Date.now());
    } else {
      // setSelectedFile(file);
      handleUploadPhoto(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setInputKey(Date.now());
  };

  return (
    <ImageContent>
      <ImageSide
        src={selectedFile ? URL.createObjectURL(selectedFile) : DefaultProfile}
        alt={selectedFile ? "Preview da imagem" : "Imagem padrão"}
      />
      <Attachments>
        <HiddenUploadImage
          key={inputKey}
          type="file"
          id="file-upload"
          accept="image/*"

          onChange={handleFileChange}
        />
        <ButtonIcon htmlFor="file-upload">
          <UploadSimple
            size={"1.3rem"} 
            color={"#FFF"} 
          />
        </ButtonIcon>
        {selectedFile && (
          <>
            <ButtonRemove onClick={handleRemoveFile}>
              <X 
                size={"1rem"}
                color={"#FFFF"} 
              />
            </ButtonRemove>
          </>
        )}
      </Attachments>
    </ImageContent>
  );
};
export default UploadImage;