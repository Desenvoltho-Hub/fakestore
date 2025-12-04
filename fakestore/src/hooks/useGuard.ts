import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useGuardRoute = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const isAuth = localStorage.getItem('userAuth')
        if(isAuth) {
            navigate('/loja')
        } else {
            navigate('/')
        }
    }, [navigate])
}