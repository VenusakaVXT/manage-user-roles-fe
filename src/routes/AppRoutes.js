import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Users from '../components/Users/Users'

function HomePage() {
    return <h3>Home Page</h3>
}

function NotFoundPage() {
    return <h3 style={{ color: 'red' }}>404 not found!!!</h3>
}

function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = getAuth()
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const AppRoutes = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
                path='/users'
                element={
                    <RequireAuth redirectTo='/login'>
                        <Users />
                    </RequireAuth>
                }
            />
            {/* <Route path="/users" element={<PrivateRoutes component={Users} 
                isAuthenticated={isAuthenticated} />} /> */}
            {/* <PrivateRoutes path='/users' element={<Users />} /> */}
            {/* <Route path='/users' element={<Users />} /> */}
            {/* <Route path='/projects' element={<Projects />} /> */}
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes