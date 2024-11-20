import PropTypes from 'prop-types'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { validateEmail, validatePassword } from '../utilities/Validations'
import { Link } from 'react-router-dom'
import { registerApi, loginApi } from '../apis/Authentication'
import { useCookies } from 'react-cookie';
import Button from '../elements/Button'
const initialErrorState = {
    email: '',
    password: '',
    api: '',
}

const Authentication = ({ pageType }) => {
    const [cookies, setCookie] = useCookies(['jwt']);
    const navigate = useNavigate()
    useEffect(() => {
        if (cookies.jwt) {
            navigate('/')
        }
    }, [])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(initialErrorState)


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newErrors = {}

        if (!validateEmail(email)) {
            //show error 
            newErrors = {

                ...newErrors,
                email: "Invalid Email",

            }
        }

        if (!validatePassword(password)) {
            //show error
            newErrors = {

                ...newErrors,
                password: "password should be atleast 6 character long"

            }
        }
        setErrors(newErrors)
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (hasErrors) {
            return
        }
        if (pageType === PageType.LOGIN) {
            //login api call
            const [response, error] = await loginApi({
                user: {
                    email: email,
                    password: password
                }
            })
            handleResponse([response, error])
        }
        else {
            const [response, error] = await registerApi({
                user: {
                    email: email,
                    password: password
                }
            })
            handleResponse([response, error])


        }

    }
    const handleResponse = async ([response, error]) => {
        if (error) {
            setErrors({
                ...errors,
                api: error
            }
            )
        }
        else {
            const jwt = response.headers.get('Authorization')
            // const result = await response.json();
            // const message = result.message
            // const user = result.data
            setCookie('jwt', jwt);



            navigate('/')

        }

    }
    return (

        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:py-12">
                <h3 className="text-2xl font-bold">
                    {(pageType === PageType.LOGIN) ? 'Login' : 'Register'

                    }</h3>
                {
                    (pageType === PageType.LOGIN) ?
                        <p className="mt-4">
                            Not a User?
                            <Link
                                to="/register"
                                className="underline ms-1"
                            >Register</Link>
                        </p>
                        :
                        <p className="mt-4">
                            Already a User?
                            <Link
                                to="/login"
                                className="underline ms-1"
                            >Login</Link>
                        </p>

                }
                <form className="mt-10 max-w-96 flex flex-col gap-8">
                    <div>
                        <input
                            className="py-2 w-full border border-gray-600 rounded px-3"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {errors.email && <p className='text-sm text-medium text-red-500 mt-1'>{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            className="py-2 w-full border border-gray-600 rounded px-3"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}

                        />
                        {errors.password && <p className='text-sm text-medium text-red-500 mt-1'>{errors.password}</p>}
                    </div>
                    <Button onClick={handleSubmit}>
                        {(pageType === PageType.LOGIN) ? 'Login' : 'Register'}
                    </Button>


                    {errors.api && <p className='text-sm text-medium text-red-500 mt-1'>{errors.api}</p>}
                </form>

            </div>
        </div>
    )

}

export const PageType = {
    LOGIN: 0,
    REGISTER: 1,
};

Authentication.propTypes =
{
    pageType: PropTypes.number.isRequired
}
export default Authentication 