
// import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';
// import Button from '../../components/Button'
// import SocialLogin from '../SocialLogin/SocialLogin';

// const Login = () => {
//       const navigate = useNavigate();
//       const location = useLocation();
//       const { signIn } = useContext(AuthContext)
//       const from = location.state?.from?.pathname || '/';
//       const { register, handleSubmit, formState: { errors } } = useForm();

//       const onSubmit = (data) => {
//             console.log(data);
//             signIn(data.email, data.password)
//                   .then(result => {
//                         console.log(result.user);
//                         alert("login successful")
//                         navigate(from, { replace: true });
//                   })
//                   .catch(err => {
//                         console.log(err.message);
//                   })
//       };

//       return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                   <div className="w-full max-w-xs">
//                         <form className="bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
//                               <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//                               <div className="mb-4">
//                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                           Email
//                                     </label>
//                                     <input
//                                           type="email"
//                                           {...register('email', { required: 'Email is required' })}
//                                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     />
//                                     {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
//                               </div>
//                               <div className="mb-6">
//                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                           Password
//                                     </label>
//                                     <input
//                                           type="password"
//                                           {...register('password', { required: 'Password is required' })}
//                                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     />
//                                     {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
//                               </div>
//                               <div className="flex items-center justify-center">
//                               <Button type="submit" text={"SignUp"}></Button>

//                               </div>
//                               <p className='text-md font-bold'>Already Registered? <Link className='text-green-400' to={'/signup'}>SignUp</Link></p>
// <SocialLogin></SocialLogin>
//                         </form>
//                   </div>
//             </div>
//       );
// };

// export default Login;


import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Button from '../../components/Button';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const { signIn } = useContext(AuthContext);
      const from = location.state?.from?.pathname || '/';
      const { register, handleSubmit, formState: { errors } } = useForm();
      const [showPassword, setShowPassword] = useState(false);

      const onSubmit = (data) => {
            console.log(data);
            signIn(data.email, data.password)
                  .then(result => {
                        console.log(result.user);
            alert("login successful");
            navigate(from, { replace: true });
      })
          .catch(err => {
                console.log(err.message);
      });
      };

      const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
      };

      return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                  <div className="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
                              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                              <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                          Email
                                    </label>
                                    <input
                                          type="email"
                                          {...register('email', { required: 'Email is required' })}
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
                              </div>
                              <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                          Password
                                    </label>
                                <div className="relative">
                                      <input
                                            type={showPassword ? 'text' : 'password'}
                                            {...register('password', { required: 'Password is required' })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      />
                                      <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500"
                                      >
                                            {showPassword ? (
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                              fillRule="evenodd"
                                                              d="M10 3C5.03 3 1 7.03 1 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11H9V5h2v3zm-1 7h-2v-2h2v2z"
                                                              clipRule="evenodd"
                                                        />
                                                  </svg>
                                            ) : (
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                              fillRule="evenodd"
                                                              d="M13.061 10c1.522 0 2.938-.588 4-1.554V9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-.554C6.123 9.412 7.539 10 9.061 10h4zm3.666 0C15.297 11.709 12.515 13 10 13c-2.514 0-5.296-1.291-6.727-3H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.273C4.704 6.29 7.486 5 10 5c2.514 0 5.296 1.291 6.727 3H17a1 1 0 0 1 1 1v.446a.5.5 0 0 1-.117.316L17.06 10h-.02zm-4.747-1c.485.494.86 1.135 1.09 1.877h-2.184A5.72 5.72 0 0 1 8.56 9h3.42zm-5.79 2.877A4.79 4.79 0 0 0 6.124 11H3.935c.23.742.604 1.383 1.09 1.877L5.94 12h1.882l-.345 1.877zM5.32 12H3.111L2.652 13.877A4.767 4.767 0 0 0 3.935 15h2.189c-.23-.742-.604-1.383-1.09-1.877L5.32 12z"
                                                              clipRule="evenodd"
                                                        />
                                                  </svg>
                                            )}
                                      </button>
                                </div>
                                {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
                          </div>
                          <div className="flex items-center justify-center">
                                <Button type="submit" text="Login" />
                          </div>
                          <p className="text-md font-bold">Not registered yet? <Link className="text-green-400" to="/signup">SignUp</Link></p>
                          <SocialLogin />
                    </form>
              </div>
        </div>
  );
};

export default Login;

