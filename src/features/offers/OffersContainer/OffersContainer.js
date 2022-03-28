import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebase-config';
import { OffersTable } from '../OffersTable/OffersTable';

export const OffersContainer = () => {
    const [offerStateData, setOfferStateData] = useState([]);

    useEffect(() => {
        const restuarantsCollectionRef = query(collection(db, "offers"), orderBy('id', 'desc'));
        onSnapshot(restuarantsCollectionRef, (snapshot) => {
            setOfferStateData(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })))
        })
    }, []);


    return (
        <>
            <OffersTable offerStateData={offerStateData} />
        </>
    );
};

