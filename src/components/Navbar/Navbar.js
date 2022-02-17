import React from 'react'
import styled from 'styled-components'
import { colors } from '../../assets/styles/color'

export const Navbar = () => {
    return (
        <Div>
            <p>Logo</p>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height:4rem;
    background-color:${colors.darkBlue_3};
    justify-content:space-between;
    align-items:center;
    padding:1.25rem;
`