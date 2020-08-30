import "./Table.css";
import React, { useCallback } from "react";
import tick from "./../../icons/checkmark.png";
import cross from "./../../icons/cross.png";
import { statusMap } from "./../../utils/constants";
import PropTypes from "prop-types";

const Table = (props) => {
  const renderTableHeader = (columns) => {
    return (
      <tr>
        {columns.map((cell) => {
          return <th key={cell.value}>{cell}</th>;
        })}
      </tr>
    );
  };

  const renderTableCell = useCallback(
    (cell) => {
      const renderType = (cell) => {
        const { type } = cell;
        switch (type) {
          case "link":
            return <a href={cell.href}>{cell.value}</a>;
          case "flag":
            return cell.value ? <img src={tick} /> : <img src={cross} />;
          case "status":
            return (
              <div style={{ backgroundColor: statusMap[cell.value] }}>
                {cell.value}{" "}
              </div>
            );
          default:
            return cell.value;
        }
      };
      return <td> {renderType(cell)}</td>;
    },
    [statusMap]
  );

  const renderTableBody = useCallback(
    (data) => {
      var rows = Object.keys(data);
      const { columnsToDisplay } = props;
      return rows.map((rowId) => {
        var client = data[rowId];
        return (
          <tr key={client.id}>
            {Object.keys(client)
              .filter((prop) => columnsToDisplay.includes(prop))
              .map((cell) => renderTableCell(client[cell]))}
          </tr>
        );
      });
    },
    [props.columnsToDisplay, renderTableCell]
  );

  return (
    <div className="table-container" style={props.style}>
      <table border="1" className="table-border">
        <tbody>
          {renderTableHeader(props.columns)}
          {renderTableBody(props.data)}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Table);

Table.propTypes = {
  columnsToDisplay: PropTypes.array.isRequired,
  style: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.data,
};
