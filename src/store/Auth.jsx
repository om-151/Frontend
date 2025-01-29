import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("")
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`

    const API = 'https://backend-1-tmyv.onrender.com'

    const auth = getAuth();

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }

    let isLoggedIn = !!token

    useEffect(() => {
        isLoggedIn = !!token;
    }, [token]);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    localStorage.setItem('token', token);
                    setToken(token);
                });
            } else {
                localStorage.removeItem('token');
                setToken("");
            }
        });

        return () => unsubscribe();
    }, []);

    const LogoutUser = () => {
        setToken("")
        localStorage.removeItem("token");
    }

    const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })

            if (response.ok) {
                const data = await response.json()
                setUser(data.userData)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        userAuthentication()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                storeTokenInLs,
                LogoutUser,
                user,
                authorizationToken,
                isLoading,
                API
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue
}