import styled from "styled-components";

export const Div = styled.div`
    height:73px;
    border-radius:14px;
    background-color:${({ theme }) => theme.colors.darkBlue_3};
    width:100%;
    display:flex;
    align-items: center;

    h2{
        font-size:1.25rem;
        font-weight:500;
        color:${({ theme }) => theme.colors.grayText};
        margin-left:2rem;
    }
`


export const RestuarantsDiv = styled(Div)`
justify-content:space-between;

    @media (max-width:577px){
        flex-direction:column;
        height:auto;

        h2{
            margin-top:0.4rem;
        }
    }
`

export const RestuarantsButtonsDiv = styled.div`
    display: flex;
    gap:0 1.6875rem;
    margin-right:1.25rem;

    @media(max-width:577px){
        flex-direction: column;
        width:100%;
        margin:0.5rem auto;
    }
`