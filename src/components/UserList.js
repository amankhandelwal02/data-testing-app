import React, { useEffect } from "react";
import mock_data from "../data/heliverse_mock_data.json";
import Pagination from "./Pagination";
import UserCard from "./UserCard";

import { selectId } from "../features/UserSlice";
import { selectQuery } from "../features/SearchSlice";
import { selectFilter } from "../features/FilterSlice";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { set } from "../features/TeamSlice";

const UserList = () => {
  const totalPages = Math.ceil(mock_data.length / 20);

  const currentValue = useSelector(selectId);
  const currentQuery = useSelector(selectQuery);
  const currentFilter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = React.useState(
    currentValue?.pageNumber
  );

  const [query, setQuery] = React.useState(currentQuery?.search);

  const [user, setUser] = React.useState([]);

  useEffect(() => {
    setCurrentPage(currentValue?.pageNumber);
    setQuery(currentQuery?.search);
  }, [currentPage, currentQuery?.search, currentValue?.pageNumber]);

  useEffect(() => {
    setUser(mock_data.slice(currentPage * 20 - 20, currentPage * 20));
  }, [currentPage, currentValue?.pageNumber]);

  useEffect(() => {
    let data = mock_data
      .slice(currentPage * 20 - 20, currentPage * 20)
      .filter((item) => {
        let fullName = item.first_name + item.last_name;
        return fullName.toLowerCase().includes(query?.toLowerCase());
      });
    setUser(data);
  }, [currentQuery.search, query]);

  useEffect(() => {
    if (currentFilter?.option === "All") {
      setUser(mock_data.slice(currentPage * 20 - 20, currentPage * 20));
    } else {
      let data = mock_data
        .slice(currentPage * 20 - 20, currentPage * 20)
        // eslint-disable-next-line array-callback-return
        .filter((item) => {
          if (item.domain === currentFilter?.option) {
            return item;
          }
          if (item.gender === currentFilter?.option) {
            return item;
          }
        });
      setUser(data);
    }
  }, [currentFilter?.domain, currentFilter]);

  const handleTeamSelection = (user) => {
    dispatch(set({ type: "SET_TEAM", user: user }));
  }

  return (
    <>
      <Pagination totalPages={totalPages} onClick={setCurrentPage} />
      <Filter user={user} />
      <div className="grid grid-cols-3 gap-0 mx-20 my-3">
        {user.map((user) => (
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
            onClick={() => handleTeamSelection(user)}
          />
        ))}
      </div>
    </>
  );
};

export default UserList;
