import React, { useEffect, useState } from 'react';
import ClassDetails from './ClassDetails';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Loader from '../../components/Loader/Loader';



const Classes = () => {
    
      const [classes, setClasses] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/approvedclasses').then(res => res.json()).then(data => {
                  setClasses(data)
            })
      }
            , [])
      console.log(classes);



      return (
           <div>
            <SectionHeader 
            title={"Top Classes"}
            ></SectionHeader>
            <Loader></Loader>
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
           </div>
      );
};

export default Classes;