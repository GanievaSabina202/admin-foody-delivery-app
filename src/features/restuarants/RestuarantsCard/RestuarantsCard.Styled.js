import { Card, Text, Group } from '@mantine/core';
import styled from 'styled-components';


export const StyledRestuarantsCards = styled(Card)`
display:flex;
flex-direction:row;
width: 247px;
position: relative !important;
/* justify-content:space-between; */
align-items:center;
`


export const ImageStyled = styled.img`
object-fit: cover;
width:64px;
height:57px;
`

export const StyledText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 130px;
    color:${({ theme }) => theme.colors.darkBlue_1} !important;
`
export const StyledGroup = styled(Group)`
width:200px;
display:flex;
gap:0;
align-items: start;
margin-left:1rem;


.mantine-qebhir{
    color:${({ theme }) => theme.colors.grayText1}
}
`

export const RestaurantsCardContent = styled.div`
    /* position: relative; */
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap:44px 36px;
    justify-content:center;

    svg{
        position: absolute !important;
        top: 0 !important;
        right: 0 !important;
        margin:.4rem .4rem 0 0 !important;
    }
`
