import React from 'react'
import { Container } from './Container.styled'
import PageHeader from '../../../components/PageHeader'

const container = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default container

