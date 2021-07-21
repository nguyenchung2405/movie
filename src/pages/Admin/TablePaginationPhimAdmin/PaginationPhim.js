import React from "react";
import { useSelector } from "react-redux";

export default function PaginationPhim(props) {
  const { currentPage, totalPages } = useSelector(
    (state) => state.PhimReducer.danhSachPhimPhanTrang
  );

  const { onePageChangePhim } = props;
  function handlePageChangePhim(newPage) {
    onePageChangePhim(newPage);
  }

  return (
    <div className="pagination">
      <button
        className="btnPagination"
        disabled={currentPage <= 1}
        onClick={() => handlePageChangePhim(currentPage - 1)}
      >
        Prev
      </button>
      <button
        className="btnPagination"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChangePhim(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
