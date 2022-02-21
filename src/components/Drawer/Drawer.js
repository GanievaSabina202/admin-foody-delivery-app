import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { drawer } from '../../store/slices/drawer/drawerSlices';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { CATAGORY } from '../../util/routing';
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../../assets/images/logo.svg'

export const CustomDrawer = () => {

    const dispatch = useDispatch()
    const { status } = useSelector(props => props.drawer);

    const { CHILD } = CATAGORY.MAIN.PANEL;
    const { LOGOUT } = CATAGORY.MAIN;

    return (
        <DrawerStyled
            variant="temporary"
            open={status}
            onClose={() => dispatch(drawer())}
        >

            <button className="birinci">
                <IoIosArrowBack />
                <img src={logo} alt="" />
            </button>

            <div className="ikinci">
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
            </div>



        </DrawerStyled>
    )
}


// const settingFlex = styled.div`
//     display:flex;
//     align-items:start;
//     justify-content: center;
//     padding-top:1.5rem;

// `

const DrawerStyled = styled(Drawer)`
    .MuiDrawer-paperAnchorLeft{
    width:80vw;
    height:100vh;
    background-color:${({ theme }) => theme.colors.lightPurple_2} !important;
    border-top-right-radius:0.875rem;
    border-bottom-right-radius:0.875rem;
    }
`

const UL = styled.ul`
    display:flex;
    width: 100%;
    padding:0 1.5rem;
    flex-direction: column;
    list-style-type: none;
    background-color:transparent;
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