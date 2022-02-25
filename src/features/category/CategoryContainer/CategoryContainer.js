import React, { useEffect } from 'react';
import { CategoryTable } from '../CategoryTable/CategoryTable';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryDataUrl } from '../../../services/category';
import { getDataCategory } from '../../../store/slices/category/categorySlice';

export const CategoryContainer = () => {
    const categorySelector = useSelector((state) => state.category.category)
    const dispatch = useDispatch();

    useEffect(() => {
        getFillDataCategory()
    }, [])

    const getFillDataCategory = async () => {
        const resCategory = await getCategoryDataUrl()
        dispatch(getDataCategory(resCategory))
    }
  

    return (
        <>
            <CategoryTable categorySelector={categorySelector} />
        </>
    );
};

