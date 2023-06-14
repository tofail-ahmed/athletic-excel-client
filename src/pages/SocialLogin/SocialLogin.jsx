import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const SocialLogin = () => {
      const { googleSignIn } = useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';

      const handleGoogleSignIn = () => {
            googleSignIn()
                  .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser);
                        alert("login successfull")
                        navigate(from, { replace: true });

                        const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                        fetch('https://athletic-excel-server.vercel.app/users', {
                              method: "POST",
                              headers: {
                                    "content-type": "application/json"
                              },
                              body: JSON.stringify(saveUser)
                        })
                              .then(res => res.json())
                              .then(() => {

                              })


                  })
      }

      return (
            <div className='text-center '>
                  <div className='divider'></div>
                  <p className='text-red-300 font-bold'>Login with <span className='text-orange-500 font-bold pb-4'>Google</span></p>
                  {/* <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline mt-4'>
                        <FaGoogle></FaGoogle>
                  </button> */}
                  <div>
                        <Button onClick={handleGoogleSignIn} text={"Google"}><FaGoogle></FaGoogle></Button>
                  </div>
            </div>
      );
};

export default SocialLogin;