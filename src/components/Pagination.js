import * as React from "react";
import { useDispatch } from "react-redux";
import { set } from "../features/UserSlice";
import { toast } from "react-toastify";

const Pagination = ({ totalPages }) => {
  const [disabled, setDisabled] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(set({ type: "SET_CURRENT_PAGE", pageNumber: currentPage }));
  }, [currentPage, dispatch]);

  React.useEffect(() => {
      if (currentPage === totalPages) {
        setCurrentPage(1);
      }
  }, [currentPage, totalPages]);

  return (
    <div className="m-3 flex items-center justify-center">
      <Button
        text="Prev"
        disabled={disabled}
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      />
      <span className="text-semibold text-gray-400">
        {currentPage} of {totalPages}
      </span>
      <Button
        text="Next"
        onClick={() => {
          if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      />
    </div>
  );
};

export default Pagination;

const Button = ({ text, disabled, onClick }) => {
  return (
    <div
      className={
        disabled
          ? "bg-gray-200 opacity-50 w-20 p-2 mx-5 flex flex-col items-center justify-center rounded-md hover:cursor-pointer hover:opacity-20 duration-300"
          : "bg-black text-white w-20 p-2 mx-5 flex flex-col items-center justify-center rounded-md hover:cursor-pointer hover:opacity-50 duration-300"
      }
      onClick={onClick}
    >
      {text}
    </div>
  );
};
