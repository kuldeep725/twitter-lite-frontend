import { useEffect, useState } from "react";
import * as Rest from "../Utils/Rest";
import FollowUser from "./FollowUser";
import { useNavigate } from "react-router-dom";

const WhoToFollow = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        let { data: allUsers } = await Rest.getAllUsers();
        console.log({ allUsers });
        setAllUsers(allUsers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <div>
      <div>
        {allUsers.map((user) => {
          return <FollowUser user={user} />;
        })}
      </div>
      <button onClick={() => navigate("/")}>Continue</button>
    </div>
  );
};

export default WhoToFollow;
