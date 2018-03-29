import React from 'react';

import { string } from 'prop-types'

import {
  Card, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

import ImageTitle from './ImageTitle';
import Thumb from './Thumb';
import ImageInfo from './ImageInfo';

const ImageItem = ({ src, title, owner, postedDate }) => (
  <div>
    <style jsx>{`
      .thumb {
        float: left;
      }
      /* @media only screen and (min-width: 800px) {
        
      }*/
    `}
    </style>
    <Card>
      <div className="thumb">
        <Thumb src={src} title={title} />
      </div>
      <div className="title">
        <ImageTitle title={title} />
      </div>
      <div className="image_info">
        <ImageInfo postedDate={postedDate} />
      </div>
      <div className="links">
      </div>
      <div style={{ clear: 'both' }} />
    </Card>
  </div>
);

ImageItem.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
}

export default ImageItem;
