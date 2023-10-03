import './Login.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userLogin } from '../../service/userService'

function Login() {
    let navigate = useNavigate()

    const [accName, setAccName] = useState("")
    const [password, setPassword] = useState("")

    const defaultValidInputs = {
        isValidAccName: true,
        isValidPassword: true
    }
    const [validate, setValidate] = useState(defaultValidInputs)

    const handleCreateNewAccount = () => {
        navigate('/register')
    }

    const handleLogin = async () => {
        setValidate(defaultValidInputs)

        if (!accName) {
            setValidate({...defaultValidInputs, isValidAccName: false})
            toast.error("Please enter your email or phone number!!!")
            return
        }

        if (!password) {
            setValidate({...defaultValidInputs, isValidPassword: false})
            toast.error("Please enter your password!!!")
            return
        }

        await userLogin(accName, password)
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
                        <input
                            className={
                                validate.isValidAccName ? 'form-control rounded-pill' : 'form-control rounded-pill is-invalid'
                            }
                            type='text'
                            placeholder='Enter username'
                            value={accName}
                            onChange={(e) => setAccName(e.target.value)}
                        />
                        <input
                            className={
                                validate.isValidPassword ? 'form-control rounded-pill' : 'form-control rounded-pill is-invalid'
                            }
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='btn login-btn bg-btn rounded-pill' onClick={() => handleLogin()}>
                            Login
                        </button>
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