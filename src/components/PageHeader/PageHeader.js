import React from 'react'
import styled from 'styled-components'
import ProductHeader from './HeaderVercions/products';
import RestaurantsHeader from './HeaderVercions/restaurants';

export const PageHeaderComponent = () => {


    switch (window.location.pathname) {

        case ('/panel/products'):
            return (
                <Div>
                    <ProductHeader />
                </Div>
            )

        case ('/panel/restaurants'):
            return (
                <Div>
                    <RestaurantsHeader />
                </Div>
            )

        default:
            return '';
    }

}


const Div = styled.div`
    height:73px;
    border-radius:14px;
    background-color:${({ theme }) => theme.colors.darkBlue_3};
    width:100%;

    h2{
        font-size:1.25rem;
        font-weight:500;
        color:${({ theme }) => theme.colors.grayText};
    }
`