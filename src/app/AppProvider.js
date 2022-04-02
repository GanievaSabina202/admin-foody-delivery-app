import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from '../assets/styles/global'
import Container from '../assets/styles/container/container'
import RouteContainer from '../assets/styles/routeContainer/routeContainer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import { theme } from '../assets/styles/theme'
import { Provider } from 'react-redux'
import { store } from '../store'
// import { Route } from 'react-router-dom'
import Login from '../pages/login'
import { useAuth } from '../context/AuthContext'

export const AppProvider = ({ children }) => {
    const { user } = useAuth()
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {!user && <Login />}
                    {
                        user && <Container>
                            <Navbar />
                            <AppDiv>
                                <Sidebar />
                                <RouteContainer>
                                    {children}
                                </RouteContainer>
                            </AppDiv>
                        </Container>
                    }
                </ThemeProvider>
            </Router>
        </Provider >
    )
}

const AppDiv = styled.div`
    display:flex;
`