import React from 'react';
import Pagination from '@mui/material/Pagination';
import * as Styled from './Pagination.styled'

export const Paginations = ({postsPerPage,page,handleChange}) => {
    return (
        <Styled.StackCustom>
            <Styled.PaginationCustom 
            count={postsPerPage} 
            page={page} 
            onChange={handleChange} 
            variant="outlined" />
        </Styled.StackCustom>
    );
};

