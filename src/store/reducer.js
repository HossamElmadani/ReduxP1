import * as actionTypes from "./actionTypes";
const initialState = {
  users: [
    {
      id: 1,
      nomComplete: "Houssam Madani",
      email: "madani@localhost.com",
      phoneNumber: "212689664533"
    }
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      let id = 1;
      if (state.users.length > 0)
        id = state.users[state.users.length - 1].id + 1;
      const newUser = {
        ...action.userInfos,
        id
      };
      return {
        ...state,
        users: state.users.concat(newUser)
      };
    case actionTypes.DELETE_USER:
      let tmp_state = { ...state };
      return {
        ...state,
        users: tmp_state.users.filter(({ id }) => id !== action.id)
      };
    case actionTypes.UPDATE_USER:
      let users = [...state.users];
      let index = users.findIndex(({ id }) => id === action.userInfos.id);
      users[index] = action.userInfos;
      return {
        ...state,
        users
      };
    default:
      return state;
  }
};
export default userReducer;
