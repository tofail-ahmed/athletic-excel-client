import React from "react";
import Button from "../../components/Button";

const ClassDetails = ({ classItem }) => {
      const { name, image, instructor, availableSeats, price } = classItem;
      return (
            <div className="flex  ">
                  <div className={`card ${availableSeats === 0 ? "bg-[red]" : ""}`}>
                        <img className="card__image w-[300px] rounded-lg" src={image} alt={name} />
                        <div className="card__content">
                              <h3 className="card__name">{name}</h3>
                              <p className="card__instructor">Instructor: {instructor}</p>
                              <p className="card__available-seats">
                                    Available Seats: {availableSeats}
                              </p>
                              <p className="card__price">Price: {price}</p>
                              <button
                                    className="card__select-button"
                                    disabled={availableSeats === 0}
                              >
                                    Select
                              </button>
                              <div >
                                    <Button text={"Select"} disabled={availableSeats === 0} ></Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ClassDetails;
