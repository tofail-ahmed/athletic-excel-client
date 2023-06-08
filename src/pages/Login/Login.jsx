
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Button from '../../components/Button'

const Login = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const { signIn } = useContext(AuthContext)
      const from = location.state?.from?.pathname || '/';
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
            console.log(data);
            signIn(data.email, data.password)
                  .then(result => {
                        console.log(result.user);
                        alert("login successful")
                        navigate(from, { replace: true });
                  })
                  .catch(err => {
                        console.log(err.message);
                  })
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
                                    <input
                                          type="password"
                                          {...register('password', { required: 'Password is required' })}
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
                              </div>
                              <div className="flex items-center justify-center">
                              <Button type="submit" text={"SignUp"}></Button>
                                    
                              </div>
                              <p className='text-md font-bold'>Already Registered? <Link className='text-green-400' to={'/signup'}>SignUp</Link></p>

                        </form>
                  </div>
            </div>
      );
};

export default Login;
