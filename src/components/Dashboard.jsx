import React from "react";
import { useSelector } from "react-redux";
import Clients from "./Clients/Clients";
import useClientData from "./model/use-client-data";
import Wrapper from "./Wrapper/Wrapper";

const Dashboard = () => {
  useClientData();
  const clients = useSelector((state) => state.clientInfo.clients);

  return (
    <Wrapper>
      <div>
        <Clients clientsData={clients} />
      </div>
    </Wrapper>
  );
};

export default Dashboard;
