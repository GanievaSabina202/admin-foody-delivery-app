import React, { useState } from 'react'
import { RestaurantsCard } from '../RestuarantsCard/RestuarantsCard'
import Paginations from '../../../components/Pagination/'
import { useSelector } from 'react-redux'
import { RestuarantsContainerStyled } from './RestuarantsContainer.Styled'
export const RestuarantsContainer = () => {
    const ProductSelector = useSelector((state) => state.products.products)
    const [page, setPage] = useState(1);

    const postsPerPage = Math.ceil(ProductSelector.length / 5);
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ProductSelector.slice(indexOfFirstPost, indexOfLastPost)
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <RestuarantsContainerStyled>
            <RestaurantsCard apisProp={currentPosts} />
            <Paginations postsPerPage={postsPerPage} page={page} handleChange={handleChange} />
        </RestuarantsContainerStyled>
    )
}

