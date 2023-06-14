import React, { useEffect, useState } from 'react';
import PopularClassDetails from './PopularClassDetails';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import PopularInstructorDetails from './PopularInstructorDetails';
import Loader from '../../../../components/Loader/Loader';
import Animation from '../../../../components/Animation';


const PopularClass = () => {
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch('https://athletic-excel-server.vercel.app/sixclasses').then(res => res.json()).then(data => {
                  setClasses(data)
            })
      }
            , [])
      console.log(classes);
      return (
            <div className='my-8'>
                  <div className='mx-auto'>
                  {/* <SectionHeader
                              title={"Popular Classes"}
                  ></SectionHeader> */}
                  <Animation body={"Popular Classes"}></Animation>
                  <Loader></Loader>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto " >
                        {
                              classes.map(classItem =>
                                    <PopularClassDetails
                                          key={classItem._id}
                                          classItem={classItem}
                                    ></PopularClassDetails>
                              )
                        }

                        </div>
                  </div>
                  <div className='mx-auto my-8'>
                        {/* <SectionHeader
                              title={"Popular Instructor"}
                        ></SectionHeader> */}
                         <Animation body={"Popular Instructor"}></Animation>
                        <Loader></Loader>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto " >
                              {
                                    classes.map(classItem =>
                                          <PopularInstructorDetails
                                                key={classItem._id}
                                                classItem={classItem}
                                          >

                                          </PopularInstructorDetails>
                                    )
                              }

                        </div>
                  </div>
            </div>
      );
};

export default PopularClass;