import { Switch, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Users from '../components/Users/Users'
import Projects from '../components/Projects/Projects'
import PrivateRoutes from './PrivateRoutes'

const NotFoundPage = () => {
    return <h3 style={{ color: 'red' }}>404 not found!!!</h3>
}

const AppRoutes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={() => <h3>Home Page</h3>} />
            <Route path="/about" component={() => <h3>About Page</h3>} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* Authorized route */}
            <PrivateRoutes path="/users" component={Users} />
            <PrivateRoutes path="/projects" component={Projects} />

            {/* The component is rendered when entering 
                addresses that have not been set up before */}
            <Route path="*" component={NotFoundPage} />
        </Switch>
    )
}

export default AppRoutes