import React, { useEffect } from 'react';
import { CategoryTable } from '../CategoryTable/CategoryTable';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryDataUrl } from '../../../services/category';
import { fetchCategory, getDataCategory } from '../../../store/slices/category/categorySlice';

export const CategoryContainer = () => {
    const { category } = useSelector(state => state.category)
    const dispatch = useDispatch();
    // useEffect(() => {
    //     getFillDataCategory()
    // }, [])

    // const getFillDataCategory = async () => {
    //     const resCategory = await getCategoryDataUrl()
    //     dispatch(getDataCategory(resCategory))
    // }

    const getAllDatas = () => {
        category.length < 1 && dispatch(fetchCategory())
    }

    useEffect(() => {
        getAllDatas();
    }, []);


    return (
        <>
            <CategoryTable />
        </>
    );
};

