import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../store/slices/orders/orderSlice';
import { OrdersTable } from '../OrdersTable/OrdersTable';

export const OrdersContainer = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders)

    const getAllData = useCallback(async () => {
        orders.length < 1 && dispatch(fetchOrders())
    }, [dispatch, orders.length])

    useEffect(() => {
        getAllData();
    }, [getAllData]);

    return (
        <>
            <OrdersTable />
        </>
    );
};

