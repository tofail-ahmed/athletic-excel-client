import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">Page not found</p>
      <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link to='/'><Button text={'Home'}></Button></Link>
    </div>
  );
};

export default NotFound;
