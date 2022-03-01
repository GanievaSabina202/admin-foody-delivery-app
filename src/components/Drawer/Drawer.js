import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { drawer } from '../../store/slices/drawer/drawerSlices';
import { CATAGORY } from '../../util/routing';
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../../assets/images/logo.svg'
import { DrawerStyled, Li, LinkStyled, UL } from './Draver.Styled';

export const CustomDrawer = () => {

    const dispatch = useDispatch()
    const { status } = useSelector(props => props.drawer);

    const { CHILD } = CATAGORY.MAIN.PANEL;
    const { LOGOUT } = CATAGORY.MAIN;

    return (
        <DrawerStyled
            transitionDuration={500}
            variant="temporary"
            open={status}
            onClose={() => dispatch(drawer())}
        >

            <button className="birinci" onClick={() => dispatch(drawer())} >
                <IoIosArrowBack />
                <img src={logo} alt="" />
            </button>

            <div className="ikinci">
                <UL>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={CHILD.DASHBOARD.HREF}>
                                <span>{CHILD.DASHBOARD.ICON}</span>
                                <h2>{CHILD.DASHBOARD.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={CHILD.PRODUCTS.HREF}>
                                <span>{CHILD.PRODUCTS.ICON}</span>
                                <h2>{CHILD.PRODUCTS.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={CHILD.RESTAURANTS.HREF}>
                                <span>{CHILD.RESTAURANTS.ICON}</span>
                                <h2>{CHILD.RESTAURANTS.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={CHILD.CATEGORY.HREF}>
                                <span>{CHILD.CATEGORY.ICON}</span>
                                <h2>{CHILD.CATEGORY.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={CHILD.ORDERS.HREF}>
                                <span>{CHILD.ORDERS.ICON}</span>
                                <h2>{CHILD.ORDERS.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={CHILD.OFFER.HREF}>
                                <span>{CHILD.OFFER.ICON}</span>
                                <h2>{CHILD.OFFER.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                    <Li onClick={() => dispatch(drawer())}>
                        {
                            <LinkStyled to={LOGOUT.HREF}>
                                <span>{LOGOUT.ICON}</span>
                                <h2>{LOGOUT.NAME}</h2>
                            </LinkStyled>
                        }
                    </Li>
                </UL>
            </div>


        </DrawerStyled >
    )
}

