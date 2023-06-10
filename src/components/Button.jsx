import React from 'react';


const Button = ({ text,disabled,onClick }) => {
      return (
            <button disabled={disabled} onClick={onClick} className="btn btn-outline bg-blue-300 hover:border-gray-500 hover:text-white text-black border border-b-4 ">
                  {text}
            </button>
      );
};
export default Button;

