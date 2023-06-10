import React from 'react';

const PopularInstructorDetails = ({classItem}) => {
      const { _id, name, image, instructor, availableSeats, price,students } = classItem;
      return (
            <div className="flex  ">
            <div className={`card ps-8 pb-8 bg-[#b3b1b1] text-[#411717]"}`}>
                  <img className="card__image w-[300px] h-[200px] rounded-lg" src={instructor.image} alt={name} />
                  <div className="card__content">
                        
                        <p className="card__instructor">Instructor: {instructor.name}</p>
                        <p className="card__available-seats">
                              Available Seats: {availableSeats}
                        </p>
                        <p className="card__price">Email: {instructor.email}</p>
                        <p className="card__price">Students: {students}</p>

                        
                  </div>
            </div>
      </div>
      );
};

export default PopularInstructorDetails;