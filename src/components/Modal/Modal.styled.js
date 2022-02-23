import styled from "styled-components";
import { Stack, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Bin = styled(DeleteForeverIcon)`
    fill: ${({ theme }) => theme.colors.lightRed}!important;
    width: 24px;
    height: 24px;
    cursor:pointer;
`