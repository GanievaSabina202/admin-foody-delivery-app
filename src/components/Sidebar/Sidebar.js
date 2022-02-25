import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { CATAGORY } from '../../util/routing';
import { Footer } from '../Footer/Footer';

export const Sidebar = () => {

    const { CHILD } = CATAGORY.MAIN.PANEL;
    const { LOGOUT } = CATAGORY.MAIN

    return (
        <Div>
            <UL>
                <Li>
                    {
                        <LinkStyled to={CHILD.DASHBOARD.HREF}>
                            <span>{CHILD.DASHBOARD.ICON}</span>
                            <h2>{CHILD.DASHBOARD.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
                <Li>
                    {
                        <LinkStyled to={CHILD.PRODUCTS.HREF}>
                            <span>{CHILD.PRODUCTS.ICON}</span>
                            <h2>{CHILD.PRODUCTS.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
                <Li>
                    {
                        <LinkStyled to={CHILD.RESTAURANTS.HREF}>
                            <span>{CHILD.RESTAURANTS.ICON}</span>
                            <h2>{CHILD.RESTAURANTS.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
                <Li>
                    {
                        <LinkStyled to={CHILD.CATEGORY.HREF}>
                            <span>{CHILD.CATEGORY.ICON}</span>
                            <h2>{CHILD.CATEGORY.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
                <Li>
                    {
                        <LinkStyled to={CHILD.ORDERS.HREF}>
                            <span>{CHILD.ORDERS.ICON}</span>
                            <h2>{CHILD.ORDERS.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
                <Li>
                    {
                        <LinkStyled to={CHILD.OFFER.HREF}>
                            <span>{CHILD.OFFER.ICON}</span>
                            <h2>{CHILD.OFFER.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
                <Li>
                    {
                        <LinkStyled to={LOGOUT.HREF}>
                            <span>{LOGOUT.ICON}</span>
                            <h2>{LOGOUT.NAME}</h2>
                        </LinkStyled>
                    }
                </Li>
            </UL>

            <Footer />
        </Div>
    )
}

const settingFlex = styled.div`
    display:flex;
    align-items:start;
    justify-content: center;
    width:18.125rem;
`

const Div = styled(settingFlex)`
    flex-direction:column;
    justify-content:space-between;
    position:relative;
    height:90vh;

    .active{
        border-radius:4px;
        background-color:#ffffff24;
    }

    @media (max-width:900px){
        display:none;
    }
;
`

const UL = styled.ul`
    width: 100%;
    height:29.625rem;
    background-color:${({ theme }) => theme.colors.lightPurple_2};
    border-radius:0.875rem;
    display:flex;
    padding:1.5rem 1.5rem;
    flex-direction: column;
    list-style-type: none;
`

const LinkStyled = styled(NavLink)`
    transition:all 0.2s;
    display:flex;
    align-items: center;
    text-decoration: none;
    color:#fff;
    width:100%;
    padding:0.4rem;

    h2{
        margin-left:1.688rem;
        font-size:1rem;
        font-weight:500;
    }

    span{
        font-size:1.5rem;
    }


    &:hover{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        background-color:#a84ec436;
    }

`

const Li = styled.li`
    height:2.5rem;
    border-radius: 4px;
    display:flex;
    align-items:center;
    
`