import { useState } from "react";
import * as FollowUtils from "../Utils/Following";

const FollowUser = ({user}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const followUser = (user) => {
    FollowUtils.followUser(user);
    setIsFollowing(true);
  };

  const unfollowUser = (user) => {
    FollowUtils.unfollowUser(user);
    setIsFollowing(false);
  };

  return (
    <div key={user.userId}>
      <p>
        {user.fullname}(<small>{user.username}</small>)
      </p>
      {!isFollowing && <button onClick={() => followUser(user)}>Follow</button>}
      {isFollowing && (
        <button onClick={() => unfollowUser(user)}>Unfollow</button>
      )}
      
    </div>
  );
};

export default FollowUser;
