import React from 'react'
import styled from 'styled-components'

export const Sidebar = () => {
    return (
        <Div>Sidebar</Div>
    )
}

const Div = styled.section`
    width:18.125rem;
    height:29.625rem;
    background-color:${({ theme }) => theme.colors.lightPurple_2};
;
`