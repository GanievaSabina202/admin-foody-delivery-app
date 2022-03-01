import { Drawer } from "@mantine/core";
import styled from "styled-components";

export const AddDrawerStyled = styled(Drawer)`
    
.drawer-closeButton-class{
    color:#fff;
    background-color: #ffffff30;
}
.drawer-drawer-class{
    background-color:${({ theme }) => theme.colors.darkBlue_2};
    color:${({ theme }) => theme.colors.grayText}
}
`