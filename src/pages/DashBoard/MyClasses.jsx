import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../Hooks/useCart';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader/Loader';

const MyClasses = () => {
      const { user } = useContext(AuthContext);
      const [cart, refetch] = useCart();
      console.log(cart);
      const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
      console.log(totalPrice);

      
      const handleDelete = classItem => {
            console.log(classItem);
           

            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                  if (result.isConfirmed) {
                      fetch(`http://localhost:5000/carts/${classItem._id}`, {
                          method: 'DELETE'
                      })
                          .then(res => res.json())
                          .then(data => {
                              if (data.deletedCount > 0) {
                                  refetch();
                                  Swal.fire(
                                      'Deleted!',
                                      'Your file has been deleted.',
                                      'success'
                                  )
                              }
                          })
                  }
              })
      }
      return (
            <div>
                  <SectionHeader title={"Selected Classes"}></SectionHeader>
                  <Loader></Loader>
                  <table className="min-w-[1200px] mx-auto bg-slate-300 border-gray-300 mb-16">
                        <thead>
                              <tr>
                                    <th className="py-4 px-2 bg-gray-100 border-b"></th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Name</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Instructor</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Instructor Email</th>

                                    <th className="py-4 px-2 bg-gray-100 border-b">Price</th>

                                    <th className="py-4 px-2 bg-gray-100 border-b">Action</th>


                              </tr>
                        </thead>
                        <tbody>
                              {cart.map((classItem) => (
                                    <tr key={classItem._id} className="hover:bg-gray-100">
                                          <td>
                                                <img className='w-[100px] h-[100px] m-2 rounded-e-full' src={classItem.image} alt="" />
                                          </td>
                                          <td className="py-4 px-2 border-b text-center">{classItem.name}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem.instructor?.name}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem.instructor?.email}</td>

                                          <td className="py-4 px-2 border-b text-center">{classItem.price}</td>




                                          <td>


                                                <Button text={"Delete"} onClick={() => handleDelete(classItem)}></Button>
                                          </td>

                                    </tr>
                              ))}
                        </tbody>
                  </table>

            </div>
      );
};

export default MyClasses;