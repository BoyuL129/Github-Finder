import React from "react";
import UserResults from "../components/users/UserResults";
import { FaUserSecret } from "react-icons/fa";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
