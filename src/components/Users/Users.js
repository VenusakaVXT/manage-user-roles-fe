import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Users.scss'

const Users = (props) => {
    let navigate = useNavigate()

    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (!session) {
            navigate('/login')
        }
    }, [])

    return (
        <div>Users Component</div>
    )
}

export default Users