import React from 'react';
import { Tables } from '../../../components/Table/Tables';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { RemoveCategoryItem } from '../../../services/category';
import { removeCategory } from '../../../store/slices/category/categorySlice';

export const CategoryTable = ({ categorySelector }) => {
    const dispatch = useDispatch();
    const ModalTitle = "Are you sure it’s deleted ?"
    const ModalDesc = " Attention! If you delete this CATEGORY, it will not come back..."

    const handler = async (id) => {
        RemoveCategoryItem()
        dispatch(removeCategory(id))
        toast("Wow so easy!")

    }
    return (
        <>
            <Tables rows={categorySelector} handler={handler} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
        </>
    );
};

