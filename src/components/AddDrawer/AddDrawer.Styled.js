import { Drawer } from "@mantine/core";
import styled from "styled-components";

export const AddDrawerStyled = styled(Drawer)`
display:flex;
flex-direction:column;
    height:auto;
    overflow:auto;
.drawer-closeButton-class{
    color:#fff;
    background-color: #ffffff30;
}
.drawer-drawer-class{
    background-color:${({ theme }) => theme.colors.darkBlue_2};
    color:${({ theme }) => theme.colors.grayText}
}


.drop-zone-box,.form-box{
    display: flex;
    align-items:flex-start;
    justify-content:space-between;

    p{
        font-weight: 500;
        color:#C7C7C7;
    }

    @media (max-width: 768px){
        flex-direction:column;
        width:100%;
        align-items:center;

        p{
            margin-bottom:1rem;
        }
    }
}

.form-box{
    width:100%;
    margin-top:4.875rem;
}
`