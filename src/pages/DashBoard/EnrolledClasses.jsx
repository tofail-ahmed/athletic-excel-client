import React, { useContext, useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';

const EnrolledClasses = () => {
      const { user } = useContext(AuthContext);
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:5000/payment/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {
                        setClasses(data.map(classItem => (classItem.itemNames)));
                  })
      }, [user?.email])
      console.log(classes);
      return (
            <div>
                  <SectionHeader title={"Enrolled Classes"}></SectionHeader>
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
                              <ul  key={subIndex}>
                                    {subArray.map((item, index) => (
                                          <li className='text-xl  font-bold text-purple-800 ' key={index}> {item}</li>
                                    ))}
                              </ul>
                        ))}
                       </div>
                  </div> */}
                  <div className='mb-12 flex justify-center items-start'>
                        <div>
                              <p className='text-2xl font-bold my-8'>
                                    Classes <span className='text-blue-600'>{user?.displayName}</span> Enrolled:
                              </p>
                              {classes.map((subArray, subIndex) => (
                                    <ul key={subIndex}>
                                          {subArray.map((item, index) => (
                                                <li className='text-xl font-bold text-purple-800 ' key={index}>
                                                      <input className='mx-4' type='checkbox' id={`checkbox-${subIndex}-${index}`} />
                                                      <label htmlFor={`checkbox-${subIndex}-${index}`}>{item}</label>
                                                </li>
                                          ))}
                                    </ul>
                              ))}
                        </div>
                  </div>


            </div>
      );
};

export default EnrolledClasses;