import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Instantiate GoogleAuthProvider
    const googleProvider = new GoogleAuthProvider();

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider); // Use the instantiated googleProvider
    };

    // Register function with displayName and photoURL
    const register = async (email, password, displayName, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = userCredential.user;

            // Update user profile with displayName and photoURL
            await updateProfile(newUser, {
                displayName: displayName,
                photoURL: photoURL || 'https://www.example.com/default-profile.png' // Provide a default photo if none given
            });

            setUser(newUser); // Set user in state after registration and profile update
            return newUser;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error; // Optionally handle this in the UI (e.g., show a toast or error message)
        }
    };

    // Login function
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out function
    const logOut = () => {
        return signOut(auth);
    };

    // Set user state when authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("This is the current user", currentUser);
        });
        return unsubscribe;
    }, []);

    const info = {
        user,
        register,
        login,
        logOut,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
