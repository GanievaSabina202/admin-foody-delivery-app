import { Paper } from "@mui/material";
import styled from "styled-components";

export const Item = styled(Paper)`
    background-color: '#fff';
    padding: '1rem';
    color: '#000';
    height: 29.5rem;
    margin-top:24px;
    position:relative;
    border-radius:1rem !important;
`

export const ItemAssignedRisks = styled(Item)`
    background-color: ${({ theme }) => theme.colors.darkBlue_3} !important;
    color: ${({ theme }) => theme.colors.grayText};
    height: 29.5rem;
    margin-top:24px;
    padding:1rem 1.5rem;
    @media (max-width:900px){
        margin-top:3.125rem !important;
       
    }

`
export const AssignedActionItems = styled(ItemAssignedRisks)`

`

export const ItemDonut = styled(Paper)`
    justify-content: center;
    border-radius:1rem !important;
    height:29.625rem;
    padding:1rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.darkBlue_3} !important;

    @media (max-width:900px){
        margin-top:3.125rem !important;
        height:100%;
    }
    /* .apexcharts-legend{
      display:none;
    } */

    .sc-dlVxhl{
        margin:2rem auto !important;
    }
`

export const ItemLine = styled(Paper)`
    border-radius:1rem !important;
    background-color: ${({ theme }) => theme.colors.darkBlue_3} !important;
    height:29.625rem;
    padding:1rem 3.125rem;
    @media (max-width:900px){
        margin-top:5.0625rem !important;
    }
    /* .sc-ksdxgE{
        padding:1rem 3rem;
    } */
`
export const DashboardContainer = styled.div`
width:100%;
padding-bottom:2.5rem;

h2{
    font-size:1.25rem;
    color: ${({ theme }) => theme.colors.grayText};
    text-align: start !important;
}
`
