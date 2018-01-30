import { ADD_FRIEND_TO_LIST, UPDATE_FRIENDS } from '../constants';

export default function(state = [], action) {
  if (action.type === ADD_FRIEND_TO_LIST) {
    return [...state, action.friend];
  }

  if (action.type === UPDATE_FRIENDS) {
    return action.friends;
  }

  return state;
}
