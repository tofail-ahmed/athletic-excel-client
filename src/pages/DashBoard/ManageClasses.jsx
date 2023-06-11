import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Button from '../../components/Button';

const ManageClasses = () => {

      const [isVisible, setIsVisible] = useState(true);


      const [axiosSecure] = useAxiosSecure();
      const { data: classes = [], refetch } = useQuery(['classes'], async () => {
            const res = await axiosSecure.get('/classes')
            return res.data;
      })

      const handleApprove = classItem => {
            fetch(`http://localhost:5000/classes/approve/${classItem._id}`, {
                  method: 'PATCH'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                              refetch();
                              alert(`${classItem.name} is Approved!`)


                        }
                  })
      }
      const handleDeny = classItem => {
            fetch(`http://localhost:5000/classes/deny/${classItem._id}`, {
                  method: 'PATCH'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                              refetch();
                              alert(`${classItem.name} is Denied!`)


                        }
                  })
      }


      console.log(classes);
      return (
            <div>
                  <SectionHeader title={"Manage Classes"}></SectionHeader>
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
                                          <td className="py-4 px-2 border-b">{classItem.availableSeats}</td>
                                          <td className="py-4 px-2 border-b">{classItem.price}</td>
                                          <td className="py-4 px-2 border-b">{classItem.status === "approved" ? "Approved" : classItem.status === "denied" ? "Denied" : "pending"}</td>

                                          {/* <td >{classItem.status === 'pending' ? 'approved' :
                                                // <button onClick={() => handleMakeAdmin(user)} ><FaUserShield></FaUserShield></button>
                                                // <Button text={"Approve"} onClick={() => handleApprove(classItem)} ></Button>
                                          }
                                                {classItem.status === 'instructor' ? 'instructor' :
                                                      // <button onClick={() => handleMakeAdmin(user)} ><FaUserShield></FaUserShield></button>
                                                      <Button text={"Deny"} onClick={() => handleDeny(classItem)} ></Button>
                                                }</td> */}
                                          <td>
                                                {classItem.status === "approved" ? "Approved" :classItem.status === "denied" ? "Denied":
                                                      <><Button text={"Approve"} onClick={() => handleApprove(classItem)}></Button>
                                                      <Button text={"Deny"} onClick={() => handleDeny(classItem)}></Button>
                                                      </>
                                                }
                                                {/* {classItem.status === "denied" ? "Denied" :
                                                      <Button text={"Deny"} onClick={() => handleDeny(classItem)}></Button>} */}

                                          </td>

                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default ManageClasses;