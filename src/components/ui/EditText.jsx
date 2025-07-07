'use client';
import React, { useState } from 'react';

const EditText = ({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  fullWidth = true,
  size = 'md',
  variant = 'default',
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const variants = {
    default: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    filled: 'bg-gray-100 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-blue-500',
    outlined: 'border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
  };

  const sizes = {
    sm: 'px-2 py-1.5 text-sm sm:px-3 sm:py-2 sm:text-base',
    md: 'px-3 py-2 text-base sm:px-4 sm:py-2.5 sm:text-lg',
    lg: 'px-4 py-2.5 text-lg sm:px-5 sm:py-3 sm:text-xl'
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${variants[variant]}
        ${sizes[size]}
        rounded-md
        transition-all
        duration-200
        ease-in-out
        focus:outline-none
        focus:ring-2
        focus:ring-opacity-50
        ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'bg-white'}
        font-medium
        placeholder-gray-400
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    />
  );
};

export default EditText;