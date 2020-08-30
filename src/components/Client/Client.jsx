import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useClientData from "../model/use-client-data";
import Table from "../Table/Table";
import Wrapper from "../Wrapper/Wrapper";
import "./Client.css";
import "./../Dashboard.css";

const Client = () => {
  const { clientId } = useParams();
  useClientData();
  const jobColumns = ["Job Id", "Job Started", "Time Taken", "Job Status"],
    jobColumnsToDisplay = ["jobId", "JobStarted", "timeTaken", "jobStatus"];

  const clients = useSelector((state) => state.clientInfo.clients);
  const currentClient = clients[clientId];
  return (
    <Wrapper>
      <div className="client-container">
        <h2> Client Details for Client Id {clientId}</h2>
        {currentClient ? (
          <>
            <div className="flex-container mb-10">
              <div className="sub-heading ">Name:</div>
              {currentClient.name.value}
            </div>
            <div className="flex-container mb-10">
              <div className="sub-heading">Description:</div>
              <div className="text-wrap width-100">
                {" "}
                {currentClient.description.value}
              </div>
            </div>
            <div className="flex-container mb-10">
              <div className="sub-heading">Last backup time:</div>
              {currentClient.lastBatchTiming.value}
            </div>
            {/* last backup size not available in the api*/}
            <div className="flex-container mb-10">
              <div className="sub-heading">Last backup size:</div>
              Not Available in Api
            </div>
            <div className="flex-container mb-10">
              <div className="sub-heading">Avg time taken:</div>
              {currentClient.avgTimeTaken.value} Seconds
            </div>
            <div>
              <div className="sub-heading">Job Details:</div>
            </div>
            <Table
              columns={jobColumns}
              columnsToDisplay={jobColumnsToDisplay}
              data={currentClient.jobs}
              style={{ height: "150px" }}
            />
          </>
        ) : null}
      </div>
    </Wrapper>
  );
};
export default React.memo(Client);
