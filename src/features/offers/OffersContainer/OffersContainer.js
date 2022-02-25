import React, { useEffect } from 'react';
import { OffersTable } from '../OffersTable/OffersTable';
import { useSelector, useDispatch } from 'react-redux';
import { getOffersDataUrl } from '../../../services/offers';
import { getDataOffers } from '../../../store/slices/offers/offersSlice';

export const OffersContainer = () => {
    const offersSelector = useSelector((state) => state.offers.offers)
    const dispatch = useDispatch();
    console.log("offer", offersSelector);

    useEffect(() => {
        getFillDataOffers()
    }, [])

    const getFillDataOffers = async () => {
        const resOffers = await getOffersDataUrl()
        dispatch(getDataOffers(resOffers))
    }

    return (
        <>
            <OffersTable offersSelector={offersSelector}/>
        </>
    );
};

