import { Button } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addDrawer } from '../../store/slices/drawer/drawerSlices';


const AddButton = () => {

    const dispatch = useDispatch()

    return (

        <AddButtonStyled onClick={() => dispatch(addDrawer())}>
            <PlusIcon />
            ADD RESTAURANTS
        </AddButtonStyled>


    )
}

export default AddButton

const AddButtonStyled = styled(Button)`
    width:10.5rem;
    height:2.1875rem;
    border-radius:14px;
    background-color:${({ theme }) => theme.colors.lightPurple_3};
    transition:all 0.2s;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    
    &:hover{
        background-color:${({ theme }) => theme.colors.lightPurple_2};
    }
`

const PlusIcon = styled(AiOutlinePlus)`
    font-size:1rem;
    margin-right:0.2rem;
`