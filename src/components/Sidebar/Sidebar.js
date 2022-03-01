import React from 'react'
import { CATAGORY } from '../../util/routing';
// import { Footer } from '../Footer/Footer';
import { Div, Li, LinkStyled, UL } from './Sidebar.styled';

export const Sidebar = () => {
    const { CHILD } = CATAGORY.MAIN.PANEL;
    const { LOGOUT } = CATAGORY.MAIN;
    // const location = window.location.pathname;

    return (
        <Div className="CutomSlideBar">
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
        </Div>
    )
}
