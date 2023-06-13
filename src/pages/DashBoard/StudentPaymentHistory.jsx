import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const StudentPaymentHistory = () => {
      const { user } = useContext(AuthContext);
      const [payment, setPayment] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:5000/payment/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {

                        setPayment(data)

                  })
      }, [user?.email])
      console.log(payment);

      return (
            <div>
                  <SectionHeader title={`${user?.displayName}'s Payment History`}></SectionHeader>
                  <table className="min-w-[1200px] mx-auto bg-slate-300 border-gray-300 mb-16">
                        <thead>
                              <tr>

                                    <th className="py-4 px-2 bg-gray-100 border-b">TransactionID</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Date</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Enrolled Email</th>
                                    <th className="py-4 px-2 bg-gray-100 border-b">Enrolled Calss</th>

                                    <th className="py-4 px-2 bg-gray-100 border-b">Paid Amount</th>

                                  


                              </tr>
                        </thead>
                        <tbody>
                              {payment.map((classItem) => (
                                    <tr key={classItem._id} className="hover:bg-gray-100">
                                          
                                          <td className="py-4 px-2 border-b text-center">{classItem.transactionId}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem.date}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.email}</td>
                                          <td className="py-4 px-2 border-b text-center">{classItem?.quantity}</td>

                                          <td className="py-4 px-2 border-b text-center">{classItem.price}</td>






                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default StudentPaymentHistory;