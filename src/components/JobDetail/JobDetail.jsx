import React from "react";
import { useParams } from "react-router-dom";
import useClientData from "../model/use-client-data";
import { useSelector } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import "./JobDetail.css";

const JobDetail = () => {
  const { clientId, jobId } = useParams();
  useClientData();
  const clients = useSelector((state) => state.clientInfo.clients);
  const currentClient = clients[clientId];
  const currentJob = currentClient && currentClient.jobs[jobId];
  return (
    <Wrapper>
      <div className="job-detail-container">
        <h2>
          {" "}
          client Details for Client Id {clientId}, jobId {jobId}
        </h2>
        {currentJob ? (
          <>
            <div className="flex-container mb-10">
              <div className="sub-heading ">Client Name: </div>
              {currentClient.name.value}
            </div>
            <div className="flex-container mb-10">
              <div className="sub-heading ">Job Started: </div>
              {currentJob.JobStarted.value}
            </div>
            <div className="flex-container mb-10">
              <div className="sub-heading ">Time Taken: </div>
              {currentJob.timeTaken.value}
            </div>
            <div className="flex-container mb-10">
              <div className="sub-heading ">Status: </div>
              {currentJob.jobStatus.value}
            </div>
          </>
        ) : null}
      </div>
    </Wrapper>
  );
};
export default React.memo(JobDetail);
