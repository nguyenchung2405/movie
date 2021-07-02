import React from "react";
import { useSelector } from "react-redux";

export default function Pagination(props) {
  const { currentPage, totalPages } = useSelector(
    (state) => state.NguoiDungReducer.danhSachNguoiDungPhanTrang
  );

  const { onePageChange } = props;
  function handlePageChangeNguoiDung(newPage) {
    onePageChange(newPage);
  }

  return (
    <div className="pagination">
      <button
        className="btnPagination"
        disabled={currentPage <= 1}
        onClick={() => handlePageChangeNguoiDung(currentPage - 1)}
      >
        Prev
      </button>
      <button
        className="btnPagination"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChangeNguoiDung(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
