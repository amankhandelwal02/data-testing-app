import React, { useEffect, useState } from "react";
import { selectTeam } from "../features/TeamSlice";
import { useSelector } from "react-redux";
import mock_data from "../data/heliverse_mock_data.json";
import UserCard from "./UserCard";

const TeamSection = () => {
  const currentTeamMember = useSelector(selectTeam);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    let data = mock_data.filter((item, index) => {
      for (let i = 0; i < currentTeamMember.length; i++) {
        if (item.id === currentTeamMember[i].user.id) {
          return item;
        }
      }
    });
    setTeam(data);
  }, [currentTeamMember]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-0 mx-20 my-3">
        {team.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            gender={user.gender}
            avatar={user.avatar}
            domain={user.domain}
            available={user.available}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
