import _ from 'lodash';
import React from 'react';

export default function TopicFilter(props) {
  const onFilterClick = id => {
    if (id === props.selected) return;
    if (typeof props.onChanged === 'function') {
      props.onChanged(id);
    }
  };

  const renderFilter = (id, label) => {
    const className = props.selected === id ? 'selected' : undefined;
    return (
      <a
        key={id}
        href="#"
        className={className}
        onClick={() => onFilterClick(id)} >
        {label}
      </a>
    );
  };

  return (
    <div className={props.className}>
      {renderFilter('all', 'All')}
      {_.map(props.topics, (topic, topicId) => renderFilter(topicId, topic.title))}
    </div>
  );
}
