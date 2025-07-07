'use client';
import React from 'react';

const PagerIndicator = ({
  totalPages = 5,
  currentPage = 0,
  onPageChange,
  variant = 'dots',
  size = 'md',
  className = '',
  activeColor = 'bg-blue-600',
  inactiveColor = 'bg-gray-300',
  ...props
}) => {
  const handlePageClick = (pageIndex) => {
    if (onPageChange) {
      onPageChange(pageIndex);
    }
  };

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const renderDots = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageClick(index)}
        className={`
          ${sizes[size]}
          rounded-full
          transition-all
          duration-200
          ease-in-out
          ${index === currentPage 
            ? `${activeColor} scale-125` 
            : `${inactiveColor} hover:bg-gray-400`
          }
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-opacity-50
        `}
        aria-label={`Go to page ${index + 1}`}
        aria-current={index === currentPage ? 'page' : undefined}
      />
    ));
  };

  const renderNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageClick(index)}
        className={`
          px-3 py-1.5
          text-sm
          font-medium
          rounded-md
          transition-all
          duration-200
          ease-in-out
          ${index === currentPage
            ? 'bg-blue-600 text-white' :'text-gray-700 hover:bg-gray-100'
          }
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-opacity-50
        `}
        aria-label={`Go to page ${index + 1}`}
        aria-current={index === currentPage ? 'page' : undefined}
      >
        {index + 1}
      </button>
    ));
  };

  const renderBars = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageClick(index)}
        className={`
          w-8 h-1
          sm:w-12 sm:h-1.5
          rounded-full
          transition-all
          duration-200
          ease-in-out
          ${index === currentPage 
            ? `${activeColor}` 
            : `${inactiveColor} hover:bg-gray-400`
          }
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-opacity-50
        `}
        aria-label={`Go to page ${index + 1}`}
        aria-current={index === currentPage ? 'page' : undefined}
      />
    ));
  };

  const renderIndicator = () => {
    switch (variant) {
      case 'numbers':
        return renderNumbers();
      case 'bars':
        return renderBars();
      case 'dots':
      default:
        return renderDots();
    }
  };

  return (
    <div 
      className={`
        flex 
        items-center 
        justify-center 
        gap-2 
        sm:gap-3
        ${className}
      `}
      role="navigation"
      aria-label="Pagination"
      {...props}
    >
      {renderIndicator()}
    </div>
  );
};

export default PagerIndicator;