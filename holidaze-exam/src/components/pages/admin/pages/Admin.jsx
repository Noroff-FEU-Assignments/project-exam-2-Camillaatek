import { useContext } from "react"
import AuthContext from "../../../../context/AuthContext"
import Dashboard from "../components/Dashboard"
import { Link } from "react-router-dom"

const Admin = () => {
    const [auth, setAuth] = useContext(AuthContext)

    if(!auth) {
        return (
            <Link to="/login"></Link>
        )
    }
    return <>
    
    <Dashboard />
    <h1>Admin PAGE</h1>
    </>
}

export default Admin