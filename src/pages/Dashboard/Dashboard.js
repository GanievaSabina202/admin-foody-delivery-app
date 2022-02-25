import React from 'react'
import { ChartLine } from '../../components/Charts/Line'
import { ChartDonut } from "../../components/Charts/Donut";
import styled from 'styled-components';

export const Dashboard = () => {

    return (
        <DashboardContainer>
            <UpperDiv>
                <DountDiv>
                    <ChartDonut />
                </DountDiv>
                <LineDiv>
                    <ChartLine />
                </LineDiv>
            </UpperDiv>
            <div>
                <div>offerss</div>
                <div>orders</div>
            </div>
        </DashboardContainer>
    )
}

const UpperDiv = styled.div`
    display:flex;
    width:100%;
`

const DountDiv = styled.div`
    width:35%;
    border-radius:14px;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkBlue_3} !important;

    .apexcharts-legend{
        display:none;
    }

  
`
const DashboardContainer = styled.div`
width:100%;
`

const LineDiv = styled.div`
    width:65%;
    border-radius:14px;
    background-color: ${({ theme }) => theme.colors.darkBlue_3} !important;
    margin-left:1.87rem;

    .sc-ksdxgE{
        padding:1rem 3rem;
    }
`