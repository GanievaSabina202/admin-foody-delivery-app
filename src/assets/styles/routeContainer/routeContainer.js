import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import PageHeaderComponent from '../../../components/PageHeader';

const RouteContainer = ({ children }) => {
    return (
        <Div container>
            <PageHeaderComponent />
            {children}
        </Div>
    )
}

export default RouteContainer

const Div = styled(Grid)`
    border:1px solid #fff;

    @media (min-width: 900px){ 
        margin-left:1rem;
    }
`