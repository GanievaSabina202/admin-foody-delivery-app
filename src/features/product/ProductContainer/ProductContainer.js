import React, { useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../store/slices/product/productSlice';
// import { getProductDataUrl } from '../../../services/product';
// import Paginations from "../../../components/Pagination"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../../config/firebase-config";

export const ProductContainer = () => {
    const ProductSelector = useSelector((state) => state.products.products)
    const dispatch = useDispatch();



    console.log(ProductSelector)
    useEffect(() => {

        const restuarantsCollectionRef = query(collection(db, "restaurants"), orderBy("products", 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            // dispatch(getRestaurants(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            // dispatch(reffing(snapshot.docs[snapshot.docs.length - 1]))
            const snapData = snapshot.docs.map((doc) => ({ ...doc.data().products }))
            dispatch(getData(snapData))
        })
    }, [dispatch]);

    // console.log(products)

    // const [page, setPage] = useState(1);
    // const postsPerPage = Math.ceil(ProductSelector.length / 10);
    // const indexOfLastPost = page * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = ProductSelector.slice(indexOfFirstPost, indexOfLastPost)
    // const handleChange = (event, value) => {
    //     setPage(value);
    // };

    return (
        <>
            <ProductCard ProductSelector={ProductSelector} />
            {/* <Paginations postsPerPage={postsPerPage} page={page} handleChange={handleChange} /> */}
        </>
    );
};

