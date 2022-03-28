import React, { useEffect, useState } from 'react';
import { CategoryTable } from '../CategoryTable/CategoryTable';
import { collection, query, orderBy, onSnapshot, } from 'firebase/firestore'
import { Conatiner } from './CategoryContainer.styled';
import { db } from '../../../config/firebase-config';
export const CategoryContainer = () => {
    const [categoryStateData, setCategoryStateData] = useState([]);

    useEffect(() => {
        const restuarantsCollectionRef = query(collection(db, "category"), orderBy('uniqueId', 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            setCategoryStateData(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })))
        })
    }, []);

    console.log(categoryStateData)

    return (
        <Conatiner>
            <CategoryTable categoryStateData={categoryStateData} />
        </Conatiner>
    );
};

