import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import styled from "styled-components"

export const DrawerStyled = styled(Drawer)`
    .MuiDrawer-paperAnchorLeft{
    width:80vw;
    height:100vh;
    background-color:${({ theme }) => theme.colors.lightPurple_2} !important;
    border-top-right-radius:0.875rem;
    border-bottom-right-radius:0.875rem;
    /* justify-content:space-between; */
    }

    button{
        background-color:transparent;
        border:1px solid transparent;
        display:flex;
        margin: 1.5rem 1rem;
        align-items:center; 
        svg{
            color:#fff !important;
            font-size:2rem;
        }
    }
`

export const UL = styled.ul`
    display:flex;
    width: 100%;
    padding:0 1.5rem;
    flex-direction: column;
    list-style-type: none;
    background-color:transparent;
`

export const LinkStyled = styled(NavLink)`
    transition:all 0.2s;
    display:flex;
    align-items: center;
    text-decoration: none;
    color:#ffffffe2;
    width:100%;
    padding:0.4rem;

    h2{
        margin-left:1.688rem;
        font-size:2rem;
        font-weight:500;
    }

    span{
        font-size:2rem;
    }


    &:hover{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        background-color:#a84ec436;
    }

`

export const Li = styled.li`
    height:4rem;
    display:flex;
    align-items:center;
    justify-content:center;
    
    .active{
        border-radius: 1rem;
        background-color:#ffffff2f;
    }
`