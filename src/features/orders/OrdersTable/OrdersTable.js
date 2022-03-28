import React from 'react';
import { Tables } from '../../../components/Table/Tables';


export const OrdersTable = ({ orderStateData }) => {

    return (
        <>
            <Tables rows={orderStateData} orderPage='orders' />
        </>
    );
};

