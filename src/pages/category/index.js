import React from 'react';
import { CategoryContainer } from '../../features/category/CategoryContainer/CategoryContainer';
import { AnimationContainer } from '../../features/offers/OffersContainer/OffersContainer.styled';
import { pageVariants } from '../Dashboard/components/DashboardCard.Styled';

const Category = () => {
    return (
        <AnimationContainer
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}>
            <CategoryContainer />
        </AnimationContainer>
    );
};

export default Category;