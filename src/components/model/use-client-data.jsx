import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientData } from "../../store/actions/client";

const useClientData = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clientInfo.clients);
  useEffect(() => {
    if (Object.keys(clients).length === 0) {
      dispatch(getClientData());
    }
  }, [getClientData, dispatch]);
};

export default useClientData;
