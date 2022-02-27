import React from 'react'
import { AnimationContainer } from '../../features/offers/OffersContainer/OffersContainer.styled'
import { RestuarantsContainer } from '../../features/restuarants/RestuarantsContainer/RestuarantsContainer'
import { pageVariants } from '../Dashboard/components/DashboardCard.Styled'

const Restaurants = () => {
    return (
        <AnimationContainer
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}>
            <RestuarantsContainer />
        </AnimationContainer>
    )
}

export default Restaurants