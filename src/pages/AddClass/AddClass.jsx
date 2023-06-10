
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Button from '../../components/Button';
// import { useContext } from 'react';


const AddClass = () => {
      const { user } = useContext(AuthContext);

      const [className, setClassName] = useState('');
      const [image, setImage] = useState('');
      const [seatsAvailable, setSeatsAvailable] = useState(0);
      const [price, setPrice] = useState(0);
      const [instructorName, setInstructorName] = useState('');
      const [instructorImage, setInstructorImage] = useState('');
      const [instructorEmail, setInstructorEmail] = useState('');
      const [formError, setFormError] = useState(false);
      const handleSubmit = (e) => {
            e.preventDefault();

            const classData = {
                  name: className,
                  image,
                  seatsAvailable,
                  price,
                  instructor: {
                        name: user.displayName,
                        image: user.photoURL,
                        email: user.email,
                  },
            };
           
            if (!className || !image || !seatsAvailable || !price || !instructorName || !instructorImage || !instructorEmail) {
                  setFormError(true);
                  return;
            }

            axios.post('http://localhost:5000/classes', classData)
                  .then(res => {
                        console.log(classData);
                        console.log('Class created successfully', res.data);
                        if (res.data.insertedId) {
                              alert('class created successfully')
                        }

                  })
           

            // Reset form fields
            setClassName('');
            setImage('');
            setSeatsAvailable(0);
            setPrice(0);
            setInstructorName('');
            setInstructorImage('');
            setInstructorEmail('');
      };







   
      return (
            <div className='mx-[20vw]'>

                  <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl mb-4">Add Class</h2>
                        {formError && (
                              <p className="text-red-500 mb-4">
                                    Please fill out all the fields.
                              </p>
                        )}
                        <div className="mb-4">
                              <label htmlFor="className" className="text-lg">
                                    Class Name:
                              </label>
                              <input
                                    type="text"
                                    id="className"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                    className="w-full border-gray-300 rounded-md p-2"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="image" className="text-lg">
                                    Image:
                              </label>
                              <input
                                    type="text"
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="w-full border-gray-300 rounded-md p-2"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="seatsAvailable" className="text-lg">
                                    Seats Available:
                              </label>
                              <input
                                    type="number"
                                    id="seatsAvailable"
                                    value={seatsAvailable}
                                    onChange={(e) => setSeatsAvailable(parseInt(e.target.value))}
                                    className="w-full border-gray-300 rounded-md p-2"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="price" className="text-lg">
                                    Price:
                              </label>
                              <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(parseInt(e.target.value))}
                                    className="w-full border-gray-300 rounded-md p-2"
                              />
                        </div>
                       
                        <Button text={"Add Class"} type="Submit"></Button>
                        

                  </form>

                  {/* <h1 className='text-5xl'>This is add class</h1>
                  <button onClick={HandlePost}>add class</button> */}
            </div>
      );
};

export default AddClass;