import React from 'react'
import PageHeaderComponent from '../../../components/PageHeader';
import { Div } from './routeConatiner.Styled';
// import { useLocation } from 'react-router-dom';



const RouteContainer = ({ children }) => {

    return (
        <Div container>
            <PageHeaderComponent />
            {children}
        </Div>
    )
}

export default RouteContainer
