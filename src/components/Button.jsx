import React from 'react';


const Button = ({ text,disabled,onClick ,type}) => {
      return (
            <button disabled={disabled} onClick={onClick} type={type} className="btn btn-outline bg-blue-300 hover:border-gray-500 hover:text-white text-black border border-b-4 ">
                  {text}
            </button>
      );
};
export default Button;

