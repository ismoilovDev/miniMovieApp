import React from "react";
import "./pagination.scss";
import { useNavigate } from "react-router";

const Pagination = ({ currentPage, totalPages=10, setCurrentPage, baseURL }) => {
   const navigate = useNavigate()

   const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
         window.scroll(0, 0)
         setCurrentPage(newPage);
         navigate(`/${baseURL}/${newPage}`)
      }
   };



   const renderPageButtons = () => {
      const pageButtons = [];

      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 2) {
         endPage = Math.min(totalPages, 5);
      }

      if (currentPage >= totalPages - 1) {
         startPage = Math.max(1, totalPages - 4);
      }

      for (let i = startPage; i <= endPage; i++) {
         pageButtons.push(
            <button
               key={i}
               className={`page_btn ${i === currentPage ? "active" : ""}`}
               onClick={() => handlePageChange(i)}
            >
               {i}
            </button>
         );
      }

      return pageButtons;
   };

   return (
      <div className="pagination">
         <button
            className="page_btn prev_btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
         >
            {"<"}
         </button>
         {renderPageButtons()}
         <button
            className="page_btn next_btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
         >
            {">"}
         </button>
      </div>
   );
};

export default Pagination;
