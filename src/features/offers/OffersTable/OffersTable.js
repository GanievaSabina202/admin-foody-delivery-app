import React from 'react';
import { Tables } from '../../../components/Table/Tables';
import { RemoveOffersItem } from '../../../services/offers';
import { toast } from 'react-toastify';
// import { removeOffers } from '../../../store/slices/offers/offersSlice';

export const OffersTable = () => {
    // const dispatch = useDispatch();
    const ModalTitle = "Are you sure it’s deleted ?"
    const ModalDesc = " Attention! If you delete this OFFERS, it will not come back..."

    const handler = async (id) => {
        RemoveOffersItem()
        // dispatch(removeOffers(id))
        toast("Wow so easy!")
    }

    return (
        <>

            <Tables handler={handler} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
        </>
    );
};
