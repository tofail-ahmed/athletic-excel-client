import React from 'react';


const Button = ({ text }) => {
      return (
            <button className="btn btn-outline bg-blue-300 hover:border-gray-500 hover:text-white text-black border border-b-4 ">
                  {text}
            </button>
      );
};
export default Button;

