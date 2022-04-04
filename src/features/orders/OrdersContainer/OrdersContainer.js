import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchOrders } from '../../../store/slices/orders/orderSlice';
import { OrdersTable } from '../OrdersTable/OrdersTable';
import { collection, query, orderBy, onSnapshot, } from 'firebase/firestore'
import { db } from '../../../config/firebase-config';

export const OrdersContainer = () => {
    const [orderStateData, setOrderStateData] = useState([]);

    useEffect(() => {
        const restuarantsCollectionRef = query(collection(db, "orders"), orderBy('key', 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            setOrderStateData(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })))
        })
    }, []);
    return (
        <>
            <OrdersTable orderStateData={orderStateData} />
        </>
    );
};

