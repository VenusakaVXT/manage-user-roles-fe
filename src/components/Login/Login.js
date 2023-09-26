import './Login.scss'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()

    const handleCreateNewAccount = () => {
        navigate('/register')
    }

    return (
        <div className="Login">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <span className="icon-brand material-symbols-outlined">
                            bolt
                        </span>
                        <div className='brand text-center mb-3'>VenusakaVXT</div>
                        <div className='detail'>
                            Welcome to the user hierarchy website created by me using
                            technologies: React, NodeJS, MySQL, Sequelize, JWT (JSON Web Tokens), ...
                        </div>
                    </div>
                    <div className="content-right border col-sm-5 col-12 d-flex flex-column gap-3 px-sm-3 py-4">
                        <div className='brand-wrap d-sm-none'>
                            <span className="icon-brand material-symbols-outlined">
                                bolt
                            </span>
                            <div className='brand text-center mb-3'>VenusakaVXT</div>
                        </div>
                        <input className='form-control rounded-pill' type='text' placeholder='Enter username' />
                        <input className='form-control rounded-pill' type='password' placeholder='Enter password' />
                        <button className='btn login-btn bg-btn rounded-pill'>Login</button>
                        <span className='text-center'>
                            <a className='forgot-pass' href='#'>Forgot your password?</a>
                        </span>
                        <hr />
                        <button className='btn create-btn rounded-pill border' onClick={() => handleCreateNewAccount()}>
                            Create New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login