
const INIT_STATE = {
  logged_in: false
};

export default function appReducer(state = INIT_STATE, action) {
  return Object.assign({}, state);
}
