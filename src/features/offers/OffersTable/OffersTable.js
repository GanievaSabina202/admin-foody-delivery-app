import React from 'react';
import { Tables } from '../../../components/Table/Tables';
import { toast } from 'react-toastify';
import { fetchOffersRemove } from '../../../store/slices/offers/offersSlice';
import { useDispatch,useSelector } from 'react-redux';

export const OffersTable = () => {
    const dispatch = useDispatch();
    const rows = useSelector(state => state.offers.offers)


    const ModalTitle = "Are you sure it’s deleted ?"
    const ModalDesc = " Attention! If you delete this OFFERS, it will not come back..."

    const handler = async (id) => {
        dispatch(fetchOffersRemove(id))
        toast("Wow so easy!")
    }

    return (
        <>
            <Tables rows={rows} handler={handler} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
        </>
    );
};

