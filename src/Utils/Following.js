import Rest from "./Rest";

export const followUser = async (userId) => {
  await Rest.followUser(userId);
  const { data: followings} = await Rest.getFollowings();
  return followings;
};

export const unfollowUser = async (userId) => {
  await Rest.unfollowUser(userId);
  const { data: followings} = await Rest.getFollowings();
  return followings;
};
