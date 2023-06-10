import React from "react";
import Button from "../../components/Button";

const ClassDetails = ({ classItem }) => {
      const { _id, name, image, instructor, availableSeats, price,students } = classItem;

const handleSelect=()=>{
      console.log("item selected");
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
                                    <Button text={"Select"} disabled={availableSeats === 0} onClick={() => handleSelect(_id)}></Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ClassDetails;
