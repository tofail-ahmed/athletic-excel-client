import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Button from "../../components/Button";
import Loader from "../../components/Loader/Loader";

const AllUser = () => {
      const [axiosSecure] = useAxiosSecure();
      const { data: users = [], refetch } = useQuery(['users'], async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
      })



      const handleMakeAdmin = user => {
            fetch(`https://athletic-excel-server.vercel.app/users/admin/${user?._id}`, {
                  method: 'PATCH'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                              refetch();
                              alert(`${user?.name} is an Admin Now!`)
                        }
                  })
      }
      const handleMakeInstructor = user => {
            fetch(`https://athletic-excel-server.vercel.app/users/instructor/${user._id}`, {
                  method: 'PATCH'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                              refetch();
                              alert(`${user?.name} is an Instructor Now!`)
                        }
                  })
      }




      return (
            <div>
                  <SectionHeader title={"All User"}></SectionHeader>
                  <Loader></Loader>
                  <table className="min-w-[1000px] mx-auto  border border-gray-300 mb-12 bg-slate-300 ">
                        <thead>
                              <tr>
                                    <th className="py-4 px-4 bg-gray-100 border-b">Name</th>
                                    <th className="py-4 px-4 bg-gray-100 border-b">Email</th>
                                    <th className="py-4 px-4 bg-gray-100 border-b">Role</th>
                                    <th className="py-4 px-4 bg-gray-100 border-b">Additional Section</th>
                                    <th className="py-4 px-4 bg-gray-100 border-b">Additional Section</th>
                              </tr>
                        </thead>
                        <tbody>
                              {users.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-100">
                                          <td className="py-4 px-4 border-b">{user?.name}</td>
                                          <td className="py-4 px-4 border-b">{user?.email}</td>
                                          <td className="py-4 px-4 border-b">{user?.role === 'admin' ? "Admin" : user?.role === 'instructor' ? "Instructor" : "Student"}</td>
                                          <td >{user?.role === 'admin' ? 'Admin' :
                                                // <button onClick={() => handleMakeAdmin(user)} ><FaUserShield></FaUserShield></button>
                                                <Button text={"Make Admin"} onClick={() => handleMakeAdmin(user)} ></Button>
                                          }</td>
                                          <td >{user?.role === 'instructor' ? 'Instructor' :
                                               
                                                <Button text={"Make Instructor"} onClick={() => handleMakeInstructor(user)} ></Button>
                                          }</td>

                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default AllUser;