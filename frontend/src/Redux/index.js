export const fetchSnacks = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/snacks")
    .then(res => res.json())
    .then(snacks => dispatch(saveSnacksToState(snacks)))
  }
}

export const saveSnacksToState = (snacks) => {
  return {type: "SAVE_SNACKS_TO_STATE", payload: snacks}
}

export const fetchToBackendTheLoginInformation = (loginInformation={}) => {
  return (dispatch) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(loginInformation)
    })
    .then(res => res.json())
    .then((response) => {
      if (!response.error) {
        localStorage.setItem("token", response.jwt)
        dispatch({type: "SAVE_USER_TO_STATE", payload: response})
      }
    })
  }
}



export const sendTokenBackToPersist = (token) => {
  return (dispatch) => {
    fetch("http://localhost:3000/persist", {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(response =>{
      dispatch({type: "SAVE_USER_TO_STATE", payload: response})
    })
  }
}

export const fetchSnackIDToBackend = (id) => {
  return (dispatch, getState) => {
    const applicationState = getState()
    fetch(`http://localhost:3000/snacks/${id}/buy`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json",
        "Authorization": applicationState.user.token
      }
    })
    .then(res => res.json())
    .then(snack => {
      dispatch({type: "SAVE_SNACK_TO_USER", payload: snack})
    })
  }
}























//
