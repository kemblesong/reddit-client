import React from 'react';

export default function PostView(props) {
  const renderEmpty = () => (
    <div>
      <h3>Select a post to view</h3>
    </div>
  );

  const renderBody = () => (
      <div>
        {props.post.body}
      </div>
  );

  const renderImage = () => (
    <img src={props.post.url} alt={props.post.title} />
  );

  const renderUrl = () => (
    <div>
      <h3>External Link</h3>
      <a href={props.post.url} target="_blank">Open</a>
    </div>
  );

  const _isImage = url => !url ? false : url.endsWith('.jpg') || url.endsWith('.gif') || url.endsWith('.png');

  if (!props.post) return renderEmpty();
  if (props.post.body) return renderBody();
  else if (_isImage(props.post.url)) return renderImage();
  else return renderUrl();
}
