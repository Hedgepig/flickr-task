import React from 'react';

import moment from 'moment';

const ImageInfo = ({ postedDate, photoPage, owner }) => (
  <div>
    <style jsx>{`
      .photo_author {
        margin-right: 20px;
        float: left;
      }
      .published_date {
        margin-right: 20px;
      }
      .view_on_flickr {
        float: left;
      }
      @media only screen and (max-width: 800px) {
        /* under 800px */
        .large {
          display: none;
        }
      }
      @media only screen and (min-width: 800px) {
        /* over 800px */
        .published_date {
          float: left;
        }
        .small {
          display: none;
        }
      }
    `}
    </style>
    <div className="info small">
      <div className="published_date">Published: { moment(postedDate).format('Do MMM YYYY [at] HH:mm') }</div>
      <div className="photo_author"><a href={owner.url}>Photo author</a></div>
      <div className="view_on_flickr"><a href={photoPage}>View on Flickr</a></div>
    </div>
    <div className="info large">
      <div className="photo_author"><a href={owner.url}>Photo author</a></div>
      <div className="published_date">Published: { moment(postedDate).format('Do MMM YYYY [at] HH:mm') }</div>
      <div className="view_on_flickr"><a href={photoPage}>View on Flickr</a></div>
    </div>
  </div>
);

export default ImageInfo;
