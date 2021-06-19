import React from "react";
import {
  LinkBoxContainer,
  LinkBoxItem,
  LinkBoxItemImg,
  LinkBoxItemTitle,
} from "./LinkBox.styled";

import { FlexContainer } from "../../shared/SharedStyles";

const LinkBox = () => {
  return (
    <FlexContainer
      flexDirection="column"
      margin="0"
    >
      <LinkBoxItem>
        <LinkBoxItemImg src="https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/118728564_3174389795991092_5479029079034452137_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ld66fVBFWKgAX9zdLHH&_nc_ht=scontent.fjdf2-2.fna&oh=a33ad6d0e088724dcdbb0c73a37f5b33&oe=60CE40D4"></LinkBoxItemImg>
        <LinkBoxItemTitle>2021</LinkBoxItemTitle>
      </LinkBoxItem>
      <LinkBoxItem>
        <LinkBoxItemImg src="https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/120095754_3238979462865458_2272860186753229185_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Dzpg8n34_aoAX98GDB0&_nc_ht=scontent.fjdf2-2.fna&oh=0448b910149bf61f7beda10b75c3c859&oe=60D05208"></LinkBoxItemImg>
        <LinkBoxItemTitle>2021</LinkBoxItemTitle>
      </LinkBoxItem>
    </FlexContainer>
  );
};

export default LinkBox;
