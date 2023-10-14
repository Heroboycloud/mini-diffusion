
import React, {useEffect} from 'react';
import {
    onAuthStateChanged,
//    currentUser,
    getAuth,
} from 'firebase/auth';
import firebase_app from '../firebase/config';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
  
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <Skeleton count={4} /> : children}
        </AuthContext.Provider>
    );
};

