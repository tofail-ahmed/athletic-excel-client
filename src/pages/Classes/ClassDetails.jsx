import React, { useContext } from "react";
import Button from "../../components/Button";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";

const ClassDetails = ({ classItem }) => {
      const { _id, name, image, instructor, availableSeats, price,students } = classItem;
      const { user } = useContext(AuthContext);
      const navigate = useNavigate();
      const [, refetch] = useCart()
      const location = useLocation();

      const handleSelect = (classItem) => {

            console.log(classItem);
            if (user && user.email) {
                  const cartItem = {
                        classId: _id, name, price, image, email: user.email, instructor: instructor
                  }
                  fetch("http://localhost:5000/carts", {
                        method: "POST",
                        headers: {
                              "content-type": "application/json"
                        },
                        body: JSON.stringify(cartItem)
                  }
                  )
                        .then(res => res.json())
                        .then(data => {
                              console.log(data);
                              if (data.insertedId) {
                                    refetch();
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'success',
                                          title: 'Food added on the cart...',
                                          showConfirmButton: false,
                                          timer: 1500
                                    })
                              }
                        })
            }
            else {
                  Swal.fire({
                        title: 'You need to login to place order!!',

                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Login Now!!'
                  }).then((result) => {
                        if (result.isConfirmed) {
                              navigate('/login', { state: { from: location } })
                        }
                  })
            }
      }

      return (
            <div className="flex  ">
                  <div className={`card ps-8 pb-8 ${availableSeats === 0 ? "bg-[#f48d8d] text-[#222222]" : "bg-[#b3b1b1] text-[#411717]"}`}>
                        <img className="card__image w-[300px] h-[200px] rounded-lg" src={image} alt={name} />
                        <div className="card__content">
                              <h3 className="card__name">{name}</h3>
                              <p className="card__instructor">Instructor: {instructor.name}</p>
                              <p className="card__available-seats">
                                    Available Seats: {availableSeats}
                              </p>
                              <p className="card__price">Price: {price}</p>
                              <p className="card__price">Students: {students}</p>

                              <div >
                                    <Button text={"Select"} disabled={availableSeats === 0} onClick={() => handleSelect(classItem)}></Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ClassDetails;
