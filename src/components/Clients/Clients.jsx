import Table from "../Table/Table";
import React from "react";
import "./Clients.css";
import PropTypes from "prop-types";

const Clients = ({ clientsData }) => {
  const columns = [
      "Name",
      "OS",
      "Is Protected",
      "Last Batch Timing",
      "Last Batch Job",
      "Average Time Taken(in sec)",
    ],
    columnsToDisplay = [
      "name",
      "os",
      "isProtected",
      "lastBatchTiming",
      "lastBatchJob",
      "avgTimeTaken",
    ];

  return (
    <div className="clients-container">
      <h2> Clients Details </h2>
      <Table
        columns={columns}
        columnsToDisplay={columnsToDisplay}
        data={clientsData}
        style={{ height: "400px", backgroundColor: "white" }}
      />
    </div>
  );
};

export default React.memo(Clients);

Clients.propTypes = {
  clientsData: PropTypes.object.isRequired,
};
