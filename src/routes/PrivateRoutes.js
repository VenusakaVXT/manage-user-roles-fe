import { useEffect } from 'react'
import { Navigate, Route } from 'react-router-dom'

const PrivateRoutes = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? <Component {...rest} />
                    :
                    <Navigate to={{ pathname: '/login', state: { from: rest.location } }} />
            }
        />
    )
}

export default PrivateRoutes