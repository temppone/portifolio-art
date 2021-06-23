import React from 'react';
import { ImgWrapper, ImgSkeleton, ImgItem } from './styled.Image';

const Image = ({ alt, ...props }) => {
  // const [imgLoad, setImgLoad] = React.useState(false);
  const [skeletonLoading, setSkeletonLoading] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeletonLoading(false);
    target.style.opacity = 1;
  };

  return (
    <ImgWrapper>
      {skeletonLoading && <ImgSkeleton />}
      <ImgItem onLoad={handleLoad} alt={alt} {...props} />
    </ImgWrapper>
  );
};

export default Image;
