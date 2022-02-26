import React from 'react';
import * as Styled from './Pagination.styled'

export const Paginations = ({ postsPerPage, page, handleChange }) => {
    return (
        <Styled.StackCustom>
            <Styled.PaginationCustom
                count={postsPerPage}
                page={page}
                onChange={handleChange}
                variant="outlined"
                defaultPage={2}
                siblingCount={0}
            />
        </Styled.StackCustom>
    );
};

