import React from 'react';
import { Tables } from '../../../components/Table/Tables';


export const CategoryTable = ({ categoryStateData }) => {

    return (
        <>
            <Tables rows={categoryStateData} orderPage={'category'} />
        </>
    );
};

