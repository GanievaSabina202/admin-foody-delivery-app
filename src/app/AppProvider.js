import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from '../assets/styles/global'
import Container from '../assets/styles/container/container'
import RouteContainer from '../assets/styles/routeContainer/routeContainer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
export const AppProvider = ({ children }) => {
    return (
        <Router>
            <GlobalStyle />
            <Container>
                <Navbar />
                <AppDiv>
                    <Sidebar />
                    <RouteContainer>
                        {children}
                    </RouteContainer>
                </AppDiv>
            </Container>
        </Router>
    )
}

const AppDiv = styled.div`
    display:flex;
`