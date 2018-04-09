import Link from 'next/link';

import React from 'react';

const Title = ({ title, onViewImage }) => (
  <div>
    <style jsx>{`
      .title {
        font-size: 25px;
        color: blue;
        cursor: pointer;
      }
      .title:hover {
        text-decoration: underline;
      }
      .truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
    </style>
    <div className="truncate title"> <a role="button" onClick={onViewImage}>{title}</a> </div>
  </div>
);

export default Title;
