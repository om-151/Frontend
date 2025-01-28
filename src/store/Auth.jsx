import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("")
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`

    const API = import.meta.env.VITE_APP_API_URL

    const auth = getAuth();

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }

    let isLoggedIn = !!token
    console.log("isLoggedIn", isLoggedIn);

    useEffect(() => {
        isLoggedIn = !!token;
        console.log("isLoggedIn updated: ", isLoggedIn);
    }, [token]);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        }
        setIsLoading(false); // Set loading to false after checking token
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    localStorage.setItem('token', token); // Store the token in local storage
                    setToken(token); // Update the token in state
                    console.log("User is signed in:", user.uid);
                });
            } else {
                localStorage.removeItem('token'); // Clear the token on logout
                setToken(""); // Reset token in state
                console.log("User is signed out");
            }
        });

        return () => unsubscribe();
    }, []);

    const LogoutUser = () => {
        setToken("")
        localStorage.removeItem("token");
        console.log("User logged out");
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
                console.log("user data ", data.userData);
                setUser(data.userData)
                setIsLoading(false)
            } else {
                console.error("Error fetching user data");
                setIsLoading(false)
            }
        } catch (error) {
            console.error("Error fetching user data.");
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