import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';

const RouteContainer = ({ children }) => {
    return (
        <Div container>
            {children}
        </Div>
    )
}

export default RouteContainer

const Div = styled(Grid)`
    border:1px solid #fff;
`