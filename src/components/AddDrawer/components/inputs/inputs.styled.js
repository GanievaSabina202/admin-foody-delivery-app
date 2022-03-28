import styled from 'styled-components'
import { Box } from '@mantine/core';

export const FormStyled = styled.form`
width: 100%;
background-color:${({ theme }) => theme.colors.darkBlue_5};
padding:23px;
border-radius: 14px;

label{
    color:#C7C7C7;
    margin-bottom:10px;
}

input{
    background-color:${({ theme }) => theme.colors.darkBlue_4};
    border-radius: 14px;
    border:1px solid ${({ theme }) => theme.colors.darkBlue_4};
    height: 46px;
    color:#C7C7C7;
}

textarea {
    background-color:${({ theme }) => theme.colors.darkBlue_4};
    border-radius: 14px;
    border:1px solid ${({ theme }) => theme.colors.darkBlue_4};
    color:#C7C7C7;
}

.mantine-TextInput-required,
.mantine-MultiSelect-required,
.mantine-NumberInput-required,
.mantine-NativeSelect-required{
    display: none;
}

.mantine-MultiSelect-root{
    margin-top:1.75rem;
    .mantine-wehybc{
        border-radius: 14px;
        border:1px solid ${({ theme }) => theme.colors.darkBlue_4};
        background-color:${({ theme }) => theme.colors.darkBlue_4}
    }
}

.deli-inp{
    margin-top:2.25rem;
}
.deli-min{
    margin-top:1.3rem;
}
.address-inp,
.nativeSelect-inp,
.slug-inp{
    margin-top:1.2rem;
}

.mantine-14kr26u{
    border-radius: 14px;
    border:1px solid ${({ theme }) => theme.colors.darkBlue_4};
    background-color:${({ theme }) => theme.colors.darkBlue_4};
    color:#C7C7C7;
}

.button-group{
    display: flex;
    flex-direction:row;
    justify-content: space-between;

  

    button{
        width:48%;
        border-radius: 14px;
        height: 50px;
        transition:all 0.3s;
        box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);

        &:first-child{
        background-color:${({ theme }) => theme.colors.darkBlue_5};
        border: 1px solid #38394E;
    }

        &:last-child{
            background-color:${({ theme }) => theme.colors.lightPurple_3};

            &:hover{
                background-color:${({ theme }) => theme.colors.lightPurple_2};
            }
        }

        @media (max-width:500px){
            width:100%
        }
       
    }
}
`

export const Boox = styled(Box)`
width: 526px;

@media (max-width: 768px){
width:100%;
}
`