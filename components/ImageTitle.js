import React from 'react';

const Title = ({ title }) => (
  <div>
    <style jsx>{`
      .title {
        font-size: 25px;
      }
      .truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
    </style>
    <div className="truncate title">{title}</div>
  </div>
);

export default Title;
