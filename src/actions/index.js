import { REQUEST_NEW_FRIEND, ADD_FRIEND_TO_LIST, FETCH_FRIENDS, UPDATE_FRIENDS } from '../constants';

export const getAllFriends = () => {  
  return {
    type: FETCH_FRIENDS
  };
};

export const updateFriends = friends => ({
  type: UPDATE_FRIENDS,
  friends,
});

export const requestNewFriend = () => {
  return {
    type: REQUEST_NEW_FRIEND,
  };
};

export const addFriendToList = friend => ({
  type: ADD_FRIEND_TO_LIST,
  friend,
});
