import { Cartprovider } from "./CartContext"
import { UserProvider } from "./UserContext"


const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <Cartprovider>
                {children}
            </Cartprovider>
        </UserProvider>
    )
}

export default AppProvider 