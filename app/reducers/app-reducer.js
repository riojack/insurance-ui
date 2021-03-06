import {
  TRY_LOGIN,
  LOGOUT
} from "../actions/login";

const INIT_STATE = {
  logged_in: false
};

export default function appReducer(state = INIT_STATE, action) {
  if (!action) {
    return state;
  }

  if (action.type === TRY_LOGIN) {
    return Object.assign({}, state, {
      logged_in: true
    });
  } else if (action.type == LOGOUT) {
    return Object.assign({}, state, {
      logged_in: false
    });
  }

  return Object.assign({}, state);
}
