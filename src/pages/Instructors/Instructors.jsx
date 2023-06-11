import React, { useContext, useEffect, useState } from 'react';
import InstructorDetails from './InstructorDetails';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';
import Loader from '../../components/Loader/Loader';

const Instructors = () => {
      const { loading } = useContext(AuthContext)
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/approvedclasses').then(res => res.json()).then(data => {
                  setClasses(data)
            })
      }
            , [])
      console.log(classes);
      return (
            <div > 

                  <SectionHeader
                        title={"Famous Instructors"}
                  ></SectionHeader>
                  <Loader></Loader>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto" >
                        {
                              classes.map(classItem =>
                                    <InstructorDetails
                                          key={classItem._id}
                                          classItem={classItem}
                                    ></InstructorDetails>


                              )
                        }
                  </div>
            </div>
      );
};

export default Instructors;