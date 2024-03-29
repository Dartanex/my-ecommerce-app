import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { emailValidation, maxPassword, minPassword } from '../utils/validators'
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase'

export const Login = () => {
  
    const {register, handleSubmit, formState: { errors },} = useForm()
    const auth = getAuth(app)
    const navigate = useNavigate()
    const [error, setError] = useState()

    const loginUser = async (data) => {
      try {
        const response = await signInWithEmailAndPassword(auth, data.email, data.password)
        console.log(response)
        navigate('/auth/products')
      } catch (error) {
        
        setError(error.message.replace('Firebase', ''))
      }
    }

    return (
    <>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title text-center">LogIn into your account</h5>
              <form onSubmit={ handleSubmit(loginUser) }>
                <div className="mb-3">
                  <input 
                    type="text" 
                    name="email"
                    {...register('email', {required: 'Email is required', pattern: emailValidation})}
                    className="form-control" 
                    placeholder="type your email"/>
                    {
                      errors.email && <span className='text-danger mt-2'>{errors.email.message}</span>
                    }
                </div>

                <div className="mb-3">
                  <input 
                    type="password" 
                    name="password"
                    {...register('password', {required: 'Password is required', minLength: minPassword, maxLength: maxPassword})}
                    className="form-control" 
                    placeholder="type your password"/>
                    {
                      errors.password && <span className='text-danger mt-2'>{errors.password.message}</span>
                    }
                </div>

                <div className="mb-3 d-grid gap-2">
                    <button className="btn btn-warning " type="submit">Login</button>
                </div>
              </form>
              {
                error && <span className='text-danger'>{error}</span>
              }
            </div>
        </div>
    </>
  )
}
