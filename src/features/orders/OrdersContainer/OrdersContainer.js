import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../store/slices/orders/orderSlice';
import { OrdersTable } from '../OrdersTable/OrdersTable';

export const OrdersContainer = () => {
    const dispatch = useDispatch();
    const  {orders}  = useSelector(state => state.orders)
    console.log(orders,'khiui');
    
    const getAllData = () => {
        orders.length < 1 && dispatch(fetchOrders())
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <>
            <OrdersTable />
        </>
    );
};

