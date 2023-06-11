import React, { useContext, useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';

const InstructorClasses = () => {
      const { user } = useContext(AuthContext);
      const [classes, setClasses] = useState([]);

    
      useEffect(() => {
            fetch(`http://localhost:5000/classes/instructorClass/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setClasses(data);
                  })
      }, [user?.email])
      console.log(classes);
      return (
            <div>
                  <SectionHeader title={"Class Of Instructor"}></SectionHeader>
            </div>
      );
};

export default InstructorClasses;