let initialState = {
  id: "",
  username: "",
  money: 0,
  snacks: [],
  token: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_USER_TO_STATE":
      let userObj = action.payload.user
      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        snacks: userObj.user_snacks,
        token: action.payload.jwt
      }

    case "SAVE_SNACK_TO_USER":
      return {...state, snacks: [...state.snacks, action.payload]}
      
    default:
      return state;
  }
}

export default userReducer
