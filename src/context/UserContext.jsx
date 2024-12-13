// Context is way easier and lighter as Redux or Zustand - but it's not as powerful as Redux or Zustand
// It is suiting for smaller stores and global states that are not too complex

// 1. Create the context file (this file) where you define variables and methods for the context
// 2. Wrap the app with the context provider in App.jsx
// 3. Use the context in any component with the custom hook (here it is useUser)

import { createContext, useContext, useState } from "react"

// Create a context object and assign it to a variable
const UserContext = createContext()

// Create the context provider with its state and methods
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userId: null,
        userName: null,
        accessToken: null,
    })

    const login = (userId, userName, accessToken) => {
        setUser({ userId, userName, accessToken })
        console.log("context login")
    }
    const logout = () => {
        setUser({ userId: null, userName: null, accessToken: null })
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

// Create a custom hook to use the context (optional but nicer to use)
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}
