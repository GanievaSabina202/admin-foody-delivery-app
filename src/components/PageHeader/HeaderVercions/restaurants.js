import React from 'react'
import { useState } from 'react';
import { Menu, Button } from '@mantine/core';
import styled from 'styled-components';
// import MdKeyboardArrowDown from 'rec'
import { MdKeyboardArrowDown } from 'react-icons/md';

const RestaurantsHeader = () => {
    const [opened, setOpened] = useState(false);

    const catagory = ['PIZZA', 'FASTFOOD', 'COFFEE',]

    return (
        <StyledMenu control={<StyledButton>Catagory type <MdKeyboardArrowDown /> </StyledButton>} opened={opened} onOpen={() => setOpened(true)} onClose={() => setOpened(false)}>
            <Menu.Label>Choose Catagory</Menu.Label>
            {
                catagory.map((i, index) => <Menu.Item key={index} >{i}</Menu.Item>)
            }
        </StyledMenu >
    )
}

export default RestaurantsHeader

const StyledButton = styled(Button)`
    background-color:${({ theme }) => theme.colors.lightGray};
    color:${({ theme }) => theme.colors.whiteLight};
    width:12.5rem;
    height:2.18rem;
    border-radius:.875rem;
    transition:all 0.2s;
    &:hover{
        background-color:${({ theme }) => theme.colors.darkBlue_2};  
    }

    svg{
        margin-top:.3rem;
        font-size:1.5rem;
    }

    @media(max-width:577px){
        width:100% !important;
    }
`

const StyledMenu = styled(Menu)`
    @media(max-width:577px){
    width:100%;
    }
`