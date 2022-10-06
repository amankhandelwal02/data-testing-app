import React from "react";
import { selectTeam } from "../features/TeamSlice";
import { useSelector } from "react-redux";
import mock_data from "../data/heliverse_mock_data.json";

const UserCard = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  avatar,
  domain,
  available,
  onClick,  
}) => {
    const isAvailable = available ? "Available" : "Not Available";
    const currentTeamMember = useSelector(selectTeam);
    const isTeamMember = currentTeamMember.find((item) => item.user.id === id);
  return (
    <div>
      <div className={`flex items-center justify-start space-x-2 ${isTeamMember ? "bg-gray-400" : "bg-gray-200"} m-3 p-3 max-w-[350px] rounded-lg hover:cursor-pointer hover:bg-gray-300 duration-300`}
      onClick={onClick}
      >
        <div className="">
          <img src={avatar} alt="user_image" className="h-16" />
        </div>
        <div>
          <h3 className="font-semibold text-xl">
            {first_name} {last_name}
          </h3>
          <p>Domain: @{domain}</p>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
          <p>Availability: {isAvailable}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
