import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchOrdersRemove } from '../../../store/slices/orders/orderSlice';
import { toast } from 'react-toastify';
import { Tables } from '../../../components/Table/Tables';

export const OrdersTable = () => {
    const dispatch = useDispatch();
    const rows = useSelector(state => state.orders.orders)
    console.log(rows,'hsiugdiubndm');
    const ModalTitle = "Are you sure it’s deleted ?"
    const ModalDesc = " Attention! If you delete this ORDERS, it will not come back..."

    const handler = async (id) => {
        dispatch(fetchOrdersRemove(id))
        toast("Wow so easy!")
    }
    return (
        <>
           <Tables  rows={rows} handler={handler} ModalTitle={ModalTitle} ModalDesc={ModalDesc}/>
        </>
    );
};

 