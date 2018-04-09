import React from 'react';

import { string } from 'prop-types'

import { withStateHandlers } from 'recompose';

import {
  Card, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

import Dialog from 'material-ui/Dialog';

import ImageTitle from './ImageTitle';
import Thumb from './Thumb';
import ImageInfo from './ImageInfo';
import ImageModal from './ImageModal';

const withModalState = withStateHandlers(
  {
    isModalShown: false,
  },
  {
    openModal: () => () => ({ isModalShown: true }),
    closeModal: () => () => ({ isModalShown: false }),
  },
)

const withApi = withModalState;

const ImageItem = ({
  sources,
  title,
  owner,
  postedDate,
  photoPage,
  toggleModal,
  isModalShown,
  openModal,
  closeModal,
}) => (
  <div>
    <style jsx>{`
      .thumb {
        float: left;
      }
      /* @media only screen and (min-width: 800px) {
        
      }*/
    `}
    </style>
    <Dialog
      title={title}
      actions={[]}
      modal={false}
      open={isModalShown}
      onRequestClose={closeModal}
    >
      <ImageModal
        owner={owner}
        sources={sources}
        postedDate={postedDate}
        photoPage={photoPage}
      />
    </Dialog>
    <Card>
      <div className="thumb">
        <Thumb
          src={sources.small}
          title={title}
          photoPage={photoPage}
          onViewImage={openModal}
        />
      </div>
      <div className="title">
        <ImageTitle
          title={title}
          src={sources.small}
          onViewImage={openModal}
        />
      </div>
      <div className="image_info">
        <ImageInfo
          postedDate={postedDate}
          photoPage={photoPage}
          owner={owner}
        />
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
};

export default withApi(ImageItem);
