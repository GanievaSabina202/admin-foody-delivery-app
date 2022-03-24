import styled from 'styled-components';
import { Dropzone } from '@mantine/dropzone';

export const CustomDropzoneStyled = styled(Dropzone)`
width: 526px;
height: 122px;
background:${({ data }) => `url(${data})`};
background-clip: content-box;
background-size: cover;
background-color:#43445A;
border-radius:14px !important;
display: flex;
align-items: center;
justify-content: center;
border:1px solid #43445A;
&:hover{
    background-color:#41425561;
}

@media (max-width: 768px){
  width:100%;
}
`