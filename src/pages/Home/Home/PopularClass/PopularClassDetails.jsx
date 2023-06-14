import React, { useState } from "react";
import Button from "../../../../components/Button";



const PopularClassDetails = ({ classItem }) => {
      const { _id, name, image, instructor, availableSeats, price, students } = classItem;
      console.log(name);

      const [isHovered, setIsHovered] = useState(false);

      const handleMouseEnter = () => {
            setIsHovered(true);
      };

      const handleMouseLeave = () => {
            setIsHovered(false);
      };

      const cardStyle = {
           
            zIndex: isHovered ? '1' : '0',
            transition: 'transform 0.5s ease-in-out',
            transform: isHovered ? 'scale(1.3)' : 'scale(1)',
      };
      return (
            <div className="flex  "style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                  
                  <div className={`card ps-8 pb-8 bg-[#b3b1b1] text-[#411717]"}`}>
                        <img className="card__image w-[300px] h-[200px] rounded-lg" src={image} alt={name} />
                        <div className="card__content">
                              <h3 className="card__name">{name}</h3>
                              <p className="card__instructor">Instructor: {instructor?.name}</p>
                              <p className="card__available-seats">
                                    Available Seats: {availableSeats}
                              </p>
                              <p className="card__price">Price: {price}</p>
                              <p className="card__price">Students: {students}</p>

                              
                        </div>
                  </div>
            </div>
      );
};

export default PopularClassDetails;

// import React from 'react';

// const PopularClassDetails = ({classItem}) => {
//       console.log(classItem.name);
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default PopularClassDetails;