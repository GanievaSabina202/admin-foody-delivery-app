import React from 'react'
import { Container } from './Container.styled'

const container = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default container

