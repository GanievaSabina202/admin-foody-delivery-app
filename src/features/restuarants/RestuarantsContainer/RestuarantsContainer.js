import React, { useEffect, useState } from 'react'
import { RestaurantsCard } from '../RestuarantsCard/RestuarantsCard'
import Paginations from '../../../components/Pagination/'
import { useDispatch, useSelector } from 'react-redux'
import { RestuarantsContainerStyled } from './RestuarantsContainer.Styled'
import { db } from '../../../config/firebase-config'
import { collection, getDocs, query, limit, orderBy, startAfter, startAt } from 'firebase/firestore'
import { getRestaurants, reffing, setPagination } from '../../../store/slices/restaurants/resSlice'
export const RestuarantsContainer = () => {
    const { restaurants, doc } = useSelector((state) => state.restaurants)


    // const [page, setPage] = useState(1);
    // const postsPerPage = Math.ceil(doc.length / 5);
    // const indexOfLastPost = page * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = doc.slice(indexOfFirstPost, indexOfLastPost)
    // const handleChange = (event, value) => {
    //     setPage(value);
    // };

    const dispatch = useDispatch()
    const restuarantsCollectionRef = query(collection(db, "restaurants"), orderBy('uniqueId', 'asc'), limit(2));

    useEffect(() => {
        if (restaurants.length < 1) {
            const getData = async () => {
                const data = await getDocs(restuarantsCollectionRef)
                dispatch(getRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                dispatch(reffing(data.docs[data.docs.length - 1]))
            }
            getData();
        }
    }, [dispatch, restaurants.length]);

    console.log(restaurants)

    const azee = async () => {
        const next = await query(collection(db, "restaurants"),
            orderBy("uniqueId", 'asc'),
            startAfter(doc),
            limit(1));

        const azzz = await getDocs(next)
        dispatch(setPagination(azzz.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        dispatch(reffing(azzz.docs[azzz.docs.length - 1]))
        // dispatch(getRestaurants(next));
    }

    return (
        <RestuarantsContainerStyled>
            <RestaurantsCard apisProp={restaurants} />
            <button onClick={azee}>sxsxsxs</button>
            {/* <Paginations postsPerPage={postsPerPage} page={page} handleChange={handleChange} /> */}
        </RestuarantsContainerStyled >
    )
}

