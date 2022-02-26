import React from 'react';
import { OrdersContainer } from '../../features/orders/OrdersContainer/OrdersContainer';
import { AnimationContainer } from '../../features/orders/OrdersContainer/OrdersContainer.styled';
import { pageVariants } from '../Dashboard/components/DashboardCard.Styled';
const Orders = () => {
    return (
        <>
            <AnimationContainer initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}>
                <OrdersContainer />
            </AnimationContainer>
        </>
    );
};

export default Orders;