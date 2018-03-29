import React from 'react';

import moment from 'moment';

const ImageInfo = ({ postedDate }) => (
  <div test={console.log(postedDate)}>
    <div className="info">
      Published: { moment(postedDate).format('Do MMM YYYY [at] HH:mm') }
    </div>
  </div>
);

export default ImageInfo;
