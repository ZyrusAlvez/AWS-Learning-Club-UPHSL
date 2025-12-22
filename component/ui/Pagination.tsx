import React from 'react';

type Props = {
  count : number,
  currentPage: number,
  onPageChange: (newIndex: number) => void
}

const Pagination = ({ count, currentPage, onPageChange }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 ease-in-out
            ${currentPage === index 
              ? 'bg-[#ffa23f] scale-125' 
              : 'bg-white'
            }
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Pagination;