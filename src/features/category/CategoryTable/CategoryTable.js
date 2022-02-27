import React from 'react';
import { Tables } from '../../../components/Table/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RemoveCategoryItem } from '../../../services/category';
import { removeCategory } from '../../../store/slices/category/categorySlice';

export const CategoryTable = () => {


    const rows = useSelector(state => state.category.category)
    const ModalTitle = "Are you sure it’s deleted ?"
    const ModalDesc = " Attention! If you delete this CATEGORY, it will not come back..."

    const handler = async (id) => {
        // RemoveCategoryItem()
        // dispatch(removeCategory(id))
        toast("Wow so easy!")
    }
    return (
        <>
            <Tables rows={rows} handler={handler} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
        </>
    );
};

