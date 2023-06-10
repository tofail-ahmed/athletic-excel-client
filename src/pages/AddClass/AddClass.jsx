
import axios from 'axios';
import React from 'react';

const AddClass = () => {
      const classData = {
            name: 'Class Name',
            image: 'class_image.jpg',
            seatsAvailable: 10,
            price: 50,
            students: 2,
            instructor: {
                  name: 'Instructor Name',
                  image: 'instructor_image.jpg',
                  email: 'instructor@example.com'
            }
      };
      const HandlePost = () => {
            axios.post('http://localhost:5000/classes', classData)
                  .then(res => {
                        console.log(classData);
                        console.log('Class created successfully', res.data);
                        if(res.data.insertedId){
                              alert('class created successfully')
                        }

                  })
      }
      return (
            <div>
                  <h1 className='text-5xl'>This is add class</h1>
                  <button onClick={HandlePost}>add class</button>
            </div>
      );
};

export default AddClass;