import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 my-5 overflow-x-auto sm:overflow-visible">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}></button>
      )}

      {pages.map((page) => (
        <div
          key={page}
          className={`text-sm leading-5 whitespace-nowrap items-center border border-[color:var(--www-autotrademark-com-alto,#DDD)] bg-white ${
            currentPage === page ? 'text-blue-500' : 'text-neutral-400'
          } aspect-${
            page % 2 === 0 ? '[1.0294117647058822]' : '[0.9117647058823529]'
          } ${currentPage === page ? 'h-[35px]' : 'h-[34px]'} flex justify-center px-3.5 py-2.5 border-solid rounded ${
            currentPage === page ? 'font-bold' : ''
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </div>
      ))}

      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>`{'>'}`</button>
      )}
    </div>
  );
};

export default Pagination;
