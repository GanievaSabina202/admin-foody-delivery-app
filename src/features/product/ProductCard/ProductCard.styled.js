import styled from "styled-components";
import { Stack, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 190px;
    height: 273px;
    margin:9px !important;
    border-radius: 5px;
    box-shadow: 0px 4px 4px #39393940;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    transition: .4s;

    &:hover{
        transform: scale(0.95);
    }

    @media(max-width:991.9px){
        width: 236px;
    }
`

export const ImgWrapper = styled.img`
    height: 158px;
    width: 160px;
    object-fit: cover;
`
export const ContentWrapper = styled.div`
width: 100%;
`
export const Title = styled(Typography).attrs(() => ({
    variant: "h6",
    component: "div"
}))`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color:  ${({ theme }) => theme.colors.darkBlue_1};
`

export const SubTitle = styled(Typography).attrs(() => ({
    variant: "p",
    component: "div"
}))`
    font-size: 14px;
    line-height: 24px;
    color:  ${({ theme }) => theme.colors.grayText1};
`

export const StackWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    @media(max-width:1199.9px){
        justify-content: center;
    }
`


export const ContentAction = styled(Stack).attrs(() => ({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    spacing: 3
}))`
width:100%;
`

export const Price = styled(Typography).attrs(() => ({
    variant: "p",
    component: "div"
}))`
font-weight: 500;
font-size: 12px;
line-height: 24px;
color:  ${({ theme }) => theme.colors.textGreenLight};
`
export const Bin = styled(DeleteForeverIcon)`
    fill: ${({ theme }) => theme.colors.lightRed}!important;
    width: 24px;
    height: 24px;
    cursor:pointer;
`