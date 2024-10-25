import { useContext, useState, useEffect, createContext } from "react";

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})

    const putUserdata = (userInfo) => {
        setUserInfo(userInfo)

        localStorage.setItem('deveburguer:userData', JSON.stringify(userInfo))
    }


    const logout = () => {
        setUserInfo({})
        localStorage.removeItem('deveburguer:userData')
    }


    // assim que aplicação iniciar ele irá verificar se tem informarção no
    // local storage e atualizar
    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('deveburguer:userData')

        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage))
        }
    }, [])


    return (
        <UserContext.Provider value={{ userInfo, putUserdata, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('userUser must be a valid')
    }

    return context
}