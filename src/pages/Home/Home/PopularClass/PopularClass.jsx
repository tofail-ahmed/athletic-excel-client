import React, { useEffect, useState } from 'react';
import PopularClassDetails from './PopularClassDetails';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';


const PopularClass = () => {
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/sixclasses').then(res => res.json()).then(data => {
                  setClasses(data)
            })
      }
            , [])
      console.log(classes);
      return (
            <div className='mx-auto'>
                  <SectionHeader
                        title={"Popular Classes"}
                  ></SectionHeader>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto " >
                        {
                              classes.map(classItem =>
                                    <PopularClassDetails
                                          key={classItem._id}
                                          classItem={classItem}
                                    ></PopularClassDetails>
                              )
                        }

                  </div>
            </div>
      );
};

export default PopularClass;