import { createContext, useContext, useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import { auth } from '../config/firebase-config';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loginError, setLoginError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            user ? setUser({ uid: user.uid, email: user.email, displayName: user.displayName, imgUrl: user.photoURL }) : setUser(null);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    //   const signup = async (email, password, name) => {
    //     try {
    //       await createUserWithEmailAndPassword(auth, email, password);
    //       await sendEmailVerification(auth.currentUser);
    //       await updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
    //       });
    //       setLoginError(null);
    //     } catch (err) {
    //       setLoginError('Email already exists, please try again with different email')
    //     }
    //   };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoginError(null);
        } catch (err) {
            setLoginError('Email or password incorrect, please try again')
        }
    };

    const logout = async () => {
        setUser(null);
        await signOut(auth);
    };

    //   const registerToFirestore = async (email, password, name, surname, phone) => {
    //     await addDoc(userCollectionRef, {
    //       email: email,
    //       password: password,
    //       name: name,
    //       surname: surname,
    //       phone: phone,
    //     });
    //   };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, loginError }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};