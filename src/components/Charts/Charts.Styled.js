import Chart from 'react-apexcharts'
import styled from 'styled-components'


export const ChartStyled = styled(Chart).attrs(() => ({
    height: '400px',
}))`
    width:100%;
   & span,
   & text {
        color:${({ theme }) => theme.colors.grayText} !important;
        fill: ${({ theme }) => theme.colors.grayText} !important;
    }
`