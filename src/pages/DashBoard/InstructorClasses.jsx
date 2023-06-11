import React, { useContext, useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';

const InstructorClasses = () => {
      const { user } = useContext(AuthContext);
      const [classes, setClasses] = useState([]);

    
      useEffect(() => {
            fetch(`http://localhost:5000/classes/instructorClass/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setClasses(data);
                  })
      }, [user?.email])
      console.log(classes);
      return (
            <div>
                  <SectionHeader title={"Class Of Instructor"}></SectionHeader>
                  <table className="min-w-[1200px] mx-auto bg-white border border-gray-300">
                        <thead>
                              <tr>
                                    <th className="py-4 px-2 bg-gray-100 border-b"></th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Name</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Instructor</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Instructor Email</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Available Seats</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Price</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Status</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Action</th>


                              </tr>
                        </thead>
                        <tbody>
                              {classes.map((classItem) => (
                                    <tr key={classItem._id} className="hover:bg-gray-100">
                                          <td>
                                                <img className='w-[100px] h-[100px] m-2 rounded-e-full' src={classItem.image} alt="" />
                                          </td>
                                          <td className="py-4 px-2 border-b">{classItem.name}</td>
                                          <td className="py-4 px-2 border-b">{classItem.instructor.name}</td>
                                          <td className="py-4 px-2 border-b">{classItem.instructor.email}</td>
                                          <td className="py-4 px-2 border-b">{classItem.availableSeats || classItem.seatsAvailable}</td>
                                          <td className="py-4 px-2 border-b">{classItem.price}</td>
                                          <td className="py-4 px-2 border-b">{classItem.status === "approved" ? "Approved" : classItem.status === "denied" ? "Denied" : "pending"}</td>


                                          <td>



                                          </td>

                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default InstructorClasses;