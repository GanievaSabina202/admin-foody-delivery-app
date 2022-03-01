import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const settingFlex = styled.div`
display:flex;
align-items:start;
justify-content: center;
width:18.125rem;
`

export const Div = styled(settingFlex)`
flex-direction:column;
justify-content:space-between;
position:relative;
/* height:63.25rem; */
.active{
    border-radius:4px;
    background-color:#ffffff24;
}

@media (max-width:900px){
    display:none;
}
;
`

export const UL = styled.ul`
width: 100%;
height:29.625rem;
background-color:${({ theme }) => theme.colors.lightPurple_2};
border-radius:0.875rem;
display:flex;
padding:1.5rem 1.5rem;
flex-direction: column;
list-style-type: none;
`

export const LinkStyled = styled(NavLink)`
transition:all 0.3s;
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

export const Li = styled.li`
height:2.5rem;
border-radius: 4px;
display:flex;
align-items:center;

`