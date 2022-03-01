import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from './Container.styled'

const container = ({ children }) => {


    return (
        <Container>
            {children}
        </Container>
    )
}

export default withRouter(container)

