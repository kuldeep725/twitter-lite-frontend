import { useEffect, useState } from "react";
import Rest from "../Utils/Rest";
import FollowUser from "./FollowUser";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllUsers, setFollowers, setFollowings } from "../Reducers/FollowSlice";

const WhoToFollow = () => {
  // const [allUsers, setAllUsers] = useState([]);
  const allUsers = useSelector(state => state.follow.allUsers);
  const followings = useSelector(state => state.follow.followings);
  const followers = useSelector(state => state.follow.followers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data: allUsersData } = await Rest.getAllUsers();
        const { data: followingsData } = await Rest.getFollowings();
        const { data: followersData } = await Rest.getFollowers();
        console.log({ allUsersData });
        console.log({ followingsData });
        console.log({ followersData });
        // setAllUsers(allUsersData);
        dispatch(setAllUsers(allUsersData));
        dispatch(setFollowings(followingsData));
        dispatch(setFollowers(followersData));
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [dispatch]);

  return (
    <div>
      <div>
        {allUsers.map(user => {
          return <FollowUser key={user.userId} user={user} />;
        })}
      </div>
      <button onClick={() => navigate("/")}>Continue</button>
    </div>
  );
};

export default WhoToFollow;
