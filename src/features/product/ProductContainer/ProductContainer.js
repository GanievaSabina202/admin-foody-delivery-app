import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getData, reffingProduct } from '../../../store/slices/product/productSlice';
// import { getProductDataUrl } from '../../../services/product';
// import Paginations from "../../../components/Pagination"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../../config/firebase-config";
import Paginations from '../../../components/Pagination';

export const ProductContainer = () => {
    const ProductSelector = useSelector((state) => state.products.products)
    const dispatch = useDispatch();


    const [page, setPage] = useState(1);
    const postsPerPage = Math.ceil(ProductSelector.length / 1.6);
    const dif = Math.ceil(ProductSelector.length / 10)
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ProductSelector.slice(indexOfFirstPost, indexOfLastPost)
    const handleChange = (event, value) => {
        setPage(value);
    };


    useEffect(() => {
        const restuarantsCollectionRef = query(collection(db, "products"), orderBy('productId', 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            dispatch(getData(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }))))
            dispatch(reffingProduct(snapshot.docs[snapshot.docs.length - 1]))
        })

    }, [dispatch]);


    return (
        <>
            <ProductCard ProductSelector={currentPosts} />
            <Paginations postsPerPage={dif} page={page} handleChange={handleChange} />
        </>
    );
};

