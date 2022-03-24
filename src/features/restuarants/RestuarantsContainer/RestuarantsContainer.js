import React, { useState, useEffect } from 'react'
import { RestaurantsCard } from '../RestuarantsCard/RestuarantsCard'
import Paginations from '../../../components/Pagination/'
import { useSelector } from 'react-redux'
import { RestuarantsContainerStyled } from './RestuarantsContainer.Styled'
import { db } from '../../../config/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export const RestuarantsContainer = () => {
    const ProductSelector = useSelector((state) => state.products.products)
    const [page, setPage] = useState(1);
    const postsPerPage = Math.ceil(ProductSelector.length / 5);
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ProductSelector.slice(indexOfFirstPost, indexOfLastPost)
    const handleChange = (event, value) => {
        setPage(value);
    };



    const restuarantsCollectionRef = collection(db, "restaurants")
    const [resdata, setResdata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(restuarantsCollectionRef)
            setResdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData();
    }, [])

    console.log(resdata)


    return (
        <RestuarantsContainerStyled>
            <RestaurantsCard apisProp={currentPosts} />
            <Paginations postsPerPage={postsPerPage} page={page} handleChange={handleChange} />
        </RestuarantsContainerStyled>
    )
}

