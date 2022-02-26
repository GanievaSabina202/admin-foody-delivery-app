import React from 'react';
import { AnimationContainer } from '../../features/offers/OffersContainer/OffersContainer.styled';
import ProductContainer from '../../features/product/ProductContainer'
import { pageVariants } from '../Dashboard/components/DashboardCard.Styled';

const Products = () => {
    return (
        <AnimationContainer
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}>
            <ProductContainer />
        </AnimationContainer>
    );
};

export default Products;