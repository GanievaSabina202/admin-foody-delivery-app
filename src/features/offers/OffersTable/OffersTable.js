import React from 'react';
import { Tables } from '../../../components/Table/Tables';


export const OffersTable = ({ offerStateData }) => {

    return (
        <>
            <Tables rows={offerStateData} orderPage='offers' />
        </>
    );
};

