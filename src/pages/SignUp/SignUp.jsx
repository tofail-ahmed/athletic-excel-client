import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider'
import Button from "../../components/Button";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {
            console.log(result.user);
            updateUserProfile(data.name, data.photoURL)
                  .then(() => {
                    const saveUser = { name: data.name, email: data.email }
                    fetch('https://athletic-excel-server.vercel.app/users', {
                      method: "POST",
                      headers: {
                        "content-type": "application/json"
                      },
                      body: JSON.stringify(saveUser)
                    })
                      .then(res => res.json())
                      .then(data => {
                        console.log(data);

                                    if (data.insertedId) {
                                      reset();
                                      alert("profile updated")
                                      navigate('/')
                                        }
                                  })


                      })


          })
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
             Name
            </label>
            <input
              type="text"
              {...register('name')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Invalid email format',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    'Password must contain at least one capital letter, one digit, and one special character',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs italic">{errors.confirmPassword.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              type="text"
              {...register('photoURL')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit" text={"SignUp"}></Button>

          </div>
          <p className='text-md font-bold'>Already Registered? <Link className='text-green-400' to={'/login'}>Login</Link></p>
        <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
