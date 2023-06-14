import React, { useContext, useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';
import Loader from '../../components/Loader/Loader';

const EnrolledClasses = () => {
      const { user } = useContext(AuthContext);
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch(`https://athletic-excel-server.vercel.app/payment/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {
                        console.log("data", data);
                        setClasses(data.map(classItem => (classItem?.itemNames)));
                  })
      }, [user?.email])
      console.log('classes', classes);
      return (
            <div>
                  <SectionHeader title={"Enrolled Classes"}></SectionHeader>
                  <Loader></Loader>
                  {/* <div>

                        {classes[0]?.map((item, index) => (
                              <div key={index}>{item}</div>
                        ))}

                  </div>
                  <div>

                        {classes[1]?.map((item, index) => (
                              <div key={index}>{item}</div>
                        ))}

                  </div>
                  <div>

                        {classes[2]?.map((item, index) => (
                              <div key={index}>{item}</div>
                        ))}

                  </div>
                   */}

                  {/* <div className='mb-12 flex justify-center items-start'>
                       <div>
                       <p className='text-2xl font-bold '>Classes <span className='text-blue-600'>{user?.displayName}</span> Enrolled</p>
                        {classes.map((subArray, subIndex) => (
                              <div key={subIndex}>
                                    {subArray.map((item, index) => (

                                          <div  key={index}>
                                                <ol>
                                                <li className='text-xl  font-bold text-purple-800 ' > {item}</li>
                                          </ol>
                                          </div>
                                    ))}
                              </div>
                        ))}
                       </div>
                  </div> */}
                  <div className='mb-12 flex justify-center items-start'>
                        <div>
                              <p className='text-2xl font-bold my-8'>
                                    Classes <span className='text-blue-600'>{user?.displayName}</span> Enrolled:
                              </p>
                              {classes?.map((subArray, subIndex) => (
                                    <div key={subIndex}>
                                          {subArray?.map((item, index) => (
                                                <div key={index}>
                                                      <ol >
                                                            <li className='text-xl font-bold text-purple-800 my-2 bg-gray-400 p-4' >
                                                      <input className='mx-4' type='checkbox' id={`checkbox-${subIndex}-${index}`} />
                                                      <label htmlFor={`checkbox-${subIndex}-${index}`}>{item}</label>
                                                </li>
                                                      </ol>
                                                </div>


                                          ))}
                                    </div>
                              ))}
                        </div>
                  </div>


            </div>
      );
};

export default EnrolledClasses;