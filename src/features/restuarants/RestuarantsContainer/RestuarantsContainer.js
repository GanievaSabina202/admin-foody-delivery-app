import React, { useEffect, useState } from 'react'
import { RestaurantsCard } from '../RestuarantsCard/RestuarantsCard'
import Paginations from '../../../components/Pagination/'
import { useDispatch, useSelector } from 'react-redux'
import { RestuarantsContainerStyled } from './RestuarantsContainer.Styled'
import { db } from '../../../config/firebase-config'
import { collection, query, orderBy, onSnapshot, } from 'firebase/firestore'
import { getRestaurants, reffing } from '../../../store/slices/restaurants/resSlice'


export const RestuarantsContainer = () => {

    const { restaurants } = useSelector((state) => state.restaurants)
    const dispatch = useDispatch()

    const [page, setPage] = useState(1);
    const postsPerPage = Math.ceil(restaurants.length / 2.9);
    const dif = Math.ceil(restaurants.length / 16)
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = restaurants.slice(indexOfFirstPost, indexOfLastPost)
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {

        const restuarantsCollectionRef = query(collection(db, "restaurants"), orderBy('uniqueId', 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            dispatch(getRestaurants(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            dispatch(reffing(snapshot.docs[snapshot.docs.length - 1]))
        })

    }, [dispatch]);


    return (
        <RestuarantsContainerStyled>
            <RestaurantsCard apisProp={currentPosts} />
            <Paginations postsPerPage={dif} page={page} handleChange={handleChange} />
        </RestuarantsContainerStyled >
    )
}

