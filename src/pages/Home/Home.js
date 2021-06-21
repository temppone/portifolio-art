import React from 'react';
import ImgDnd from '../../Components/ImgDnd/ImgDnd';
import LinkBox from '../../Components/LinkBox';

const imgs = [
  'https://source.unsplash.com/random/700x700',
  'https://source.unsplash.com/random/910x800',
  'https://source.unsplash.com/random/1000x990',
  'https://source.unsplash.com/random/600x900',
  'https://source.unsplash.com/random/1100x1000',
  'https://source.unsplash.com/random/1099x700',
];

const Home = () => {
  return (
    <div>
      <LinkBox />
      {imgs.map((itemUrl) => (
        <ImgDnd imgUrl={itemUrl} />
      ))}
    </div>
  );
};

export default Home;
