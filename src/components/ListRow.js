import React from 'react';

export default function ListRow(props) {
  const backgroundColor = props.selected ? '#c0f0ff' : '#fff';
  const handleClick = () => props.onClick(props.rowId);

  return (
    <div
      style={{ backgroundColor }}
      onClick={handleClick} >
      {props.children}
    </div>
  );
}
