import React from 'react';
import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const InstructorDetails = ({ classItem }) => {
      const { _id, name, image, instructor, availableSeats, price, students } = classItem;

      const handleSelect = () => {
            console.log("item selected");
      }
      return (
           <div>
           
             <div className="flex  ">
                  <div className={`card ps-8 pb-8 bg-[#b3b1b1] text-[#411717]"}`}>
                        <img className="card__image w-[300px] h-[200px] rounded-lg" src={instructor.image} alt={name} />
                        <div className="card__content">

                              <p className="card__instructor">Instructor: {instructor.name}</p>
                              
                              <p className="card__price">Topic: {name}</p>
                              <p className="card__price">Students: {students}</p>

                              <div >
                                    <Button text={"Send Eamil"} onClick={() => handleSelect(_id)}></Button>
                              </div>
                        </div>
                  </div>
            </div>
           </div>
      );
};

export default InstructorDetails;