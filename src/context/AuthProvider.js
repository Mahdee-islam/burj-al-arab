import React from 'react';
import { createContext } from 'react';
import useFirease from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ( {children} ) => {

    const allContexts = useFirease();

    return (
        <AuthContext.Provider value={ allContexts }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;