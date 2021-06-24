import React from 'react';
import LinkBox from '../../Components/LinkBox';
import { FlexContainer } from '../../shared/SharedStyles';

const Home = () => {
  // const [dataImg, setDataImg] = React.useState('');

  // React.useEffect(() => {
  //   const getImg = async () => {
  //     try {
  //       const response = await fetch('https://picsum.photos/v2/list?limit=2');
  //       const json = await response.json();
  //       setDataImg(json);
  //       console.log(json);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       console.log('finally');
  //     }
  //   };

  //   getImg();
  // }, []);

  // if (!dataImg) return null;

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="960px"
      margin="0 auto"
    >
      {/* {dataImg.map((imgItem) => (
        <LinkBox
          imgAlt={imgItem.author}
          imgBoxItem={imgItem.url}
          LinkBoxTitle={imgItem.title}
        />
      ))} */}

      <LinkBox
        albumId={'album/art'}
        imgAlt="teste"
        imgBoxItem="https://source.unsplash.com/random/1000x1000?art"
        LinkBoxTitle="2021"
      />
      <LinkBox
        albumId={'album/art'}
        imgAlt="teste"
        imgBoxItem="https://source.unsplash.com/random/1001x1001?art"
        LinkBoxTitle="2020"
      />
    </FlexContainer>
  );
};

export default Home;
