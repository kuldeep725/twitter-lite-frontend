import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFollowings } from "../Reducers/FollowSlice";
import * as FollowUtils from "../Utils/Following";

const FollowUser = ({ user }) => {
  const followings = useSelector((state) => state.follow.followings) || [];
  // const [isFollowing, setIsFollowing] = useState(isInitiallyFollowing);
  const dispatch = useDispatch();
  // console.log({ user, followings, isInitiallyFollowing, isFollowing });

  const isFollowing = (followings, followingId) =>
    followings.map((o) => o.followingId).includes(followingId);

  const followUser = async (user) => {
    try {
      const updatedFollowings = await FollowUtils.followUser(user.userId);
      console.log({updatedFollowings});
      dispatch(setFollowings(updatedFollowings));
      // setIsFollowing(true);
    } catch (err) {
      console.log(err);
    }
  };

  const unfollowUser = async (user) => {
    try {
      const updatedFollowings = await FollowUtils.unfollowUser(user.userId);
      console.log({updatedFollowings});
      dispatch(setFollowings(updatedFollowings));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>
        {user.fullname}(<small>{user.username}</small>)
      </p>
      {!isFollowing(followings, user.userId) && <button onClick={() => followUser(user)}>Follow</button>}
      {isFollowing(followings, user.userId) && (
        <button onClick={() => unfollowUser(user)}>Unfollow</button>
      )}
    </div>
  );
};

export default FollowUser;
