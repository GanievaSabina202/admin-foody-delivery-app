import styled from "styled-components"

export const FooterInside = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
border-radius:14px;
background-color:${({ theme }) => theme.colors.darkBlue_3};
height:5rem;
`

export const FooterContainer = styled.div`
position:absolute;
bottom:0;
width:100% !important;

p{
    color:#ffffff90;
}

p:nth-child(2) {
 padding-top:0.2rem;
}
`