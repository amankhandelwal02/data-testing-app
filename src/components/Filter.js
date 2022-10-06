import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { set } from "../features/FilterSlice";

const Filter = ({ user }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const filterOptions = [
    { id: 1, name: "All" },
    { id: 2, name: "Domain" },
    { id: 3, name: "Gender" },
    // { id: 4, name: "Availability" },
  ];

  const [buttonType, setButtonType] = useState("");
  const [options, setoptions] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const domains = [...new Set(user.map((item) => item.domain))];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const genders = ["Male", "Female"];
  // eslint-disable-next-line react-hooks/exhaustive-deps
//   const availability = ["Available", "Not Available"];

  useEffect(() => {
    if (buttonType === "Domain") {
      setoptions(domains);
    } else if (buttonType === "Gender") {
      setoptions(genders);
    // } else if (buttonType === "Availability") {
    //   setoptions(availability);
    } else if (buttonType === "All") {
      setoptions(["All"]);
    }
    // eslint-disable-next-line no-use-before-define
  }, [buttonType]);

  return (
    <div className="space-y-5">
      {!show && (
        <div className="flex items-center justify-end">
          {filterOptions.map((option, index) => (
            <Button
            key={index}
              text={option.name}
              onClick={() => {
                if (option.name === "All") {
                    dispatch(set({ type: "SET_FILTER", option: "All" }));
                } else {
                    setButtonType(option.name);
                    setShow(true);
                }
              }}
            />
          ))}
        </div>
      )}
      {show && (
        <div className="flex items-center justify-end">
          {options.map((option, index) => (
            <Button
            key={index}
              text={option}
              onClick={() => {
                dispatch(set({ type: "SET_DOMAIN", option: option }));
                setShow(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

const Button = ({ text, onClick }) => {
  return (
    <div
      className={`bg-black text-white p-2 px-5 mx-5 flex flex-col items-center justify-center rounded-md hover:cursor-pointer hover:opacity-50 duration-300`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
