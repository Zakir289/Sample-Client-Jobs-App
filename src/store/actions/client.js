import axios from "./../../axios-client";
import { FETCH_CLIENTS } from "./actionTypes";

const fetchClients = (payload) => {
  return {
    type: FETCH_CLIENTS,
    payload,
  };
};

export const getClientData = () => {
  return async (dispatch) => {
    const response = await axios.get("b/5f3218e46f8e4e3faf300630/1");
    dispatch(fetchClients(response.data.clients));
  };
};
