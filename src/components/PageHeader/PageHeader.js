import React from 'react'
import { AddDrawer } from '../AddDrawer/AddDrawer';
// import styled from 'styled-components'
import AddButton from '../Buttons/addButton';
import RestaurantsHeader from './HeaderVercions/restaurants';
import { Div, RestuarantsButtonsDiv, RestuarantsDiv } from './PageHeader.Styled';

export const PageHeaderComponent = () => {


    switch (window.location.pathname) {

        case ('/panel/products'):
            return (
                <Div>
                    <h2>Products</h2>
                </Div>
            )

        case ('/panel/restaurants'):
            return (
                <RestuarantsDiv>
                    <AddDrawer />
                    <h2>Restaurants</h2>
                    <RestuarantsButtonsDiv>
                        <RestaurantsHeader />
                        <AddButton />
                    </RestuarantsButtonsDiv>
                </RestuarantsDiv>
            )

        default:
            return '';
    }

}

