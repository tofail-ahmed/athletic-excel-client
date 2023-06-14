import React, { useContext, useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';
import Button from '../../components/Button';
import Loader from '../../components/Loader/Loader';
import Animation from '../../components/Animation';

const InstructorClasses = () => {
      const { user } = useContext(AuthContext);
      const [classes, setClasses] = useState([]);

    
      useEffect(() => {
            fetch(`https://athletic-excel-server.vercel.app/classes/instructorClass/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setClasses(data);
                  })
      }, [user?.email])
      console.log(classes);
      return (
            <div className=' '>
                  {/* <SectionHeader title={"Class Of Instructor"}></SectionHeader> */}
                  <Animation body={"Class Of Instructor"}></Animation>
                  <Loader></Loader>
                  <table className="min-w-[1200px] mx-auto bg-slate-300 border-gray-300 mb-16">
                        <thead>
                              <tr>
                                    <th className="py-4 px-2 bg-gray-100 border-b"></th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Name</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Instructor</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Instructor Email</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Available Seats</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Price</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Status</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Enrolled</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Action</th>


                              </tr>
                        </thead>
                        <tbody>
                              {classes.map((classItem) => (
                                    <tr key={classItem._id} className="hover:bg-gray-100">
                                          <td>
                                                <img className='w-[100px] h-[100px] m-2 rounded-e-full' src={classItem?.image} alt="" />
                                          </td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.name}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.instructor.name}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.instructor.email}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.availableSeats || classItem?.seatsAvailable}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.price}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.status === "approved" ? "Approved" : classItem?.status === "denied" ? "Denied" : "pending"}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.students ? classItem?.students : 0}</td>


                                          <td>


                                                <Button text={"Update"}></Button>
                                          </td>

                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default InstructorClasses;