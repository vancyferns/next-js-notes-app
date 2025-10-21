'use client';
import React, { createContext } from 'react';
const AuthContext=createContext(null);

export default function AuthProvider(props)
{
    const {children}=props;
    return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
    );
}