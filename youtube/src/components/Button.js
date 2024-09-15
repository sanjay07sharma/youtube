import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm whitespace-nowrap">
      {props.name}
    </button>
  );
}

export default Button;
