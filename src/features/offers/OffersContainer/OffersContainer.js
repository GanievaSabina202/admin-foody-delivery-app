import React, { useEffect } from 'react';
import { OffersTable } from '../OffersTable/OffersTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOffers } from '../../../store/slices/offers/offersSlice';
// import { getOffersDataUrl } from '../../../services/offers';
// import { getDataOffers } from '../../../store/slices/offers/offersSlice';

export const OffersContainer = () => {

    const dispatch = useDispatch();
    const { offers } = useSelector(state => state.offers)
    
    const getAllData = () => {
        offers.length < 1 && dispatch(fetchOffers())
    }

    useEffect(() => {
        getAllData();
    }, []);


    return (
        <>
            <OffersTable />
        </>
    );
};

