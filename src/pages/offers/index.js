import React from 'react';
import { OffersContainer } from '../../features/offers/OffersContainer/OffersContainer';
import { AnimationContainer } from '../../features/offers/OffersContainer/OffersContainer.styled';
import { pageVariants } from '../Dashboard/components/DashboardCard.Styled';

const Offers = () => {
    return (
        <AnimationContainer initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}>
            <OffersContainer />
        </AnimationContainer>
    );
};

export default Offers;

