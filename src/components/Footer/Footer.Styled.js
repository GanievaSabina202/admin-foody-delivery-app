import styled from "styled-components"

export const FooterInside = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
border-radius:1rem;
background-color:${({ theme }) => theme.colors.darkBlue_3};
height:5rem;
`

export const FooterContainer = styled.div`
position:absolute;
bottom:2.6rem;
width:100% !important;

p{
    color:#ffffff90;
}

p:nth-child(2) {
 padding-top:0.2rem;
}
`