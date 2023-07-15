import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)

    const login = (email, password) => {
        setIsLoading(true)
        const currentUser = {
            email: email,
            _password_hash: password
        }

    return (
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
    }
}