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


    // const unsub = onSnapshot(doc(db, "restaurants", "uniqueId"), (doc) => {
    //     console.log("Current data: ", doc.data());
    // });

    useEffect(() => {

        // const getData = async () => {
        //     const data = await getDocs(restuarantsCollectionRef)
        //     dispatch(getRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        //     dispatch(reffing(data.docs[data.docs.length - 1]))
        // }
        // getData();

        const restuarantsCollectionRef = query(collection(db, "restaurants"), orderBy('uniqueId', 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            dispatch(getRestaurants(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            dispatch(reffing(snapshot.docs[snapshot.docs.length - 1]))
        })

    }, [dispatch]);


    // const azee = async () => {
    //     const next = await query(collection(db, "restaurants"),
    //         orderBy("uniqueId", 'asc'),
    //         startAfter(doc),
    //         limit(5));

    //     const azzz = await getDocs(next)
    //     dispatch(setPagination(azzz.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    //     dispatch(reffing(azzz.docs[azzz.docs.length - 1]))
    // }

    // const find = async () => {
    //     const q = query(citiesRef, where("name", "==", "xxx"));
    //     const mn = await getDocs(q);
    //     console.log((mn.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    // }


    return (
        <RestuarantsContainerStyled>
            <RestaurantsCard apisProp={currentPosts} />

            <Paginations postsPerPage={dif} page={page} handleChange={handleChange} />
        </RestuarantsContainerStyled >
    )
}

