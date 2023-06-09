import React, { useEffect, useState } from 'react';
import ClassDetails from './ClassDetails';



const Classes = () => {
    
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch('classes.json').then(res => res.json()).then(data => {
                  setClasses(data)
            })
      }
            , [])
      console.log(classes);



      return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto " >
                  {
                        classes.map(classItem =>
                              <ClassDetails
                                    key={classItem._id}
                                    classItem={classItem}
                              ></ClassDetails>


                        )
                  }
            </div>
      );
};

export default Classes;