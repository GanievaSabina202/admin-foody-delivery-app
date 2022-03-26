import styled from "styled-components";
import { Typography, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Modal } from '@mantine/core';

export const DesigModal = styled(Modal)`
.mantine-ActionIcon-hover{
    display:none;
}
`

export const Bin = styled(DeleteForeverIcon)`
    fill: ${({ theme }) => theme.colors.lightRed}!important;
    width: 24px;
    height: 24px;
    cursor:pointer;
`

export const ContentWrap = styled.div`
    margin-bottom: 24px;
`
export const ModalDesc = styled(Typography)`
    font-size: 19px;
    text-align:center !important;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayText2};
        @media (max-width: 767.9px) {
        font-size:14px !important;
        }
`
export const ModalTitle = styled(Typography)`
    font-size:28px !important;
    font-weight: 600 !important;
    text-align:center !important;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};
        @media (max-width: 767.9px) {
        font-size:18px !important;
        white-space: nowrap;
        }
`

export const ButtonCancel = styled(Button).attrs(() => ({
    variant: "outlined",
}))`
font-weight: 500;
font-size: 16px;
margin-right: 29px !important;
border: 2px solid ${({ theme }) => theme.colors.grayText1} !important;
color: ${({ theme }) => theme.colors.grayText1} !important;
    @media (max-width: 767.9px) {
       margin: 10px 0px 0px 0px !important;
    }
`

export const ButtonDelete = styled(Button).attrs(() => ({
    variant: "contained",
    color: 'error',
}))``

export const ButtonWrapper = styled.div`
margin-top:2rem;
display:flex;

justify-content:center;

    @media (max-width: 767.9px) {
        display: flex;
        flex-direction: column-reverse;
    }
`