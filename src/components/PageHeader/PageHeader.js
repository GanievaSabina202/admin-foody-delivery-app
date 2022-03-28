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
                    <AddDrawer config={{ name: 'restaurants', title: 'Add restaurants', inputType: 'restaurants' }} />
                    <h2>Restaurants</h2>
                    <RestuarantsButtonsDiv>
                        <RestaurantsHeader />
                        <AddButton>ADD RESTAURANTS</AddButton>
                    </RestuarantsButtonsDiv>
                </RestuarantsDiv>
            )
        case ('/panel/category'):
            return (
                <RestuarantsDiv>
                    <AddDrawer config={{ name: 'category', title: 'Add category', inputType: 'category' }} />
                    <h2>Category</h2>
                    <RestuarantsButtonsDiv>
                        <AddButton>ADD CATEGORY</AddButton>
                    </RestuarantsButtonsDiv>
                </RestuarantsDiv>
            )
        case ('/panel/orders'):
            return (
                <RestuarantsDiv>
                    {/* <AddDrawer config={{ name: 'order', title: 'Add category', inputType: 'category' }} /> */}
                    <h2>Orders</h2>
                    <RestuarantsButtonsDiv>
                        {/* <AddButton>ADD CATEGORY</AddButton> */}
                    </RestuarantsButtonsDiv>
                </RestuarantsDiv>
            )
        case ('/panel/offers'):
            return (
                <RestuarantsDiv>
                    <AddDrawer config={{ name: 'offers', title: 'Add offer', inputType: 'offers' }} />
                    <h2>Offer</h2>
                    <RestuarantsButtonsDiv>
                        <AddButton>ADD OFFER</AddButton>
                    </RestuarantsButtonsDiv>
                </RestuarantsDiv>
            )

        default:
            return '';
    }

}

