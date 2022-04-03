import styled from "styled-components";

export const LoginWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`


export const Wraps = styled.div`
display: flex;
align-items: center;
justify-content: center;

    @media(max-width:991.9px){
        flex-direction: column-reverse;
    }
`

export const Inputss = styled.div``


export const ImgWrapper = styled.div`
width: 425px;
height: 411px;
background-color:white;
padding: 40px;

display: flex;
align-items: center;
justify-content: center;

@media(max-width:991.9px){  
        width: fit-content; 
        height: auto;
        background-color: transparent;
    }
`

export const InputWrappers = styled.div`
width: 425px;
height: 411px;  
background-color: #38394E;
padding: 40px;
@media(max-width:991.9px){  
        width: fit-content; 
        background-color: transparent;
        height: auto;
    }
`

export const TitleWrap = styled.div`
font-weight: 700;
font-size: 35px;
line-height: 43px;
text-align: center;
color: #C7C7C7;
`