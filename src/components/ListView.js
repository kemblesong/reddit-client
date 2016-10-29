import _ from 'lodash';
import React from 'react';

export default function ListView(props) {
  const renderRowById = rowId => (
    <li key={rowId}>
      {props.renderRow(rowId, _.get(props.rowsById, rowId))}
    </li>
  );

  return (
    <ul>
      {_.map(props.rowsIdArray, renderRowById)}
    </ul>
  );
}
