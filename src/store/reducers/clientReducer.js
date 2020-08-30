import { FETCH_CLIENTS } from "./../actions/actionTypes";
import { constructClientsData, updateObject } from "./../../utils/utility";
const initialState = {
  clients: {},
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return updateObject(initialState, {
        clients: constructClientsData(action.payload),
      });
    default:
      return state;
  }
};

export default clientReducer;
