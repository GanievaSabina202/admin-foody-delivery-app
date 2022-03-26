import React, { useEffect, useState } from 'react'
import { RestaurantsCard } from '../RestuarantsCard/RestuarantsCard'
import Paginations from '../../../components/Pagination/'
import { useDispatch, useSelector } from 'react-redux'
import { RestuarantsContainerStyled } from './RestuarantsContainer.Styled'
import { db } from '../../../config/firebase-config'
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore'
import { getRestaurants, reffing } from '../../../store/slices/restaurants/resSlice'
export const RestuarantsContainer = () => {

    const { restaurants } = useSelector((state) => state.restaurants)
    const dispatch = useDispatch()
    const restuarantsCollectionRef = query(collection(db, "restaurants"), orderBy('uniqueId', 'asc'), limit(30));

    const [page, setPage] = useState(1);
    const postsPerPage = Math.ceil(restaurants.length / 2);
    const dif = Math.ceil(restaurants.length / 16)
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = restaurants.slice(indexOfFirstPost, indexOfLastPost)
    const handleChange = (event, value) => {
        setPage(value);
    };



    useEffect(() => {
        if (restaurants.length < 1) {
            const getData = async () => {
                const data = await getDocs(restuarantsCollectionRef)
                dispatch(getRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                dispatch(reffing(data.docs[data.docs.length - 1]))
            }
            getData();
        }
    }, []);


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
            {/* <button onClick={azee}>sxsxsxs</button> */}
            <Paginations postsPerPage={dif} page={page} handleChange={handleChange} />
        </RestuarantsContainerStyled >
    )
}

