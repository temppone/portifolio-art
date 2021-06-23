import React from 'react';
import { ImgWrapper, ImgSkeleton, ImgItem } from './styled.Image';

const Image = ({ alt, ...props }) => {
  // const [imgLoad, setImgLoad] = React.useState(false);
  const [skeletonLoading, setSkeletonLoading] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeletonLoading(true);
    target.style.opacity = 0;
  };

  return (
    <ImgWrapper>
      {skeletonLoading && <ImgSkeleton />}
      <ImgItem onLoad={handleLoad} alt={alt} {...props} />
    </ImgWrapper>
  );
};

export default Image;
