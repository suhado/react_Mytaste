import React from 'react';
import Icon1 from '../../images/1.png';
import Icon2 from '../../images/2.png';
import Icon3 from '../../images/3.png';
import {
    PhotoContainer,
    PhotoH1,
    PhotoWrapper,
    PhotoCard,
    PhotoIcon,
    PhotoH2,
    PhotoP
} from './PhotoElements';

const Photo = () => {
  return (
    <PhotoContainer id="photo">
      <PhotoH1>PHOTO</PhotoH1>
      <PhotoP>좋아하는 카페 공간 사진들</PhotoP>
      <PhotoWrapper>
        <PhotoCard>
          <PhotoIcon src={Icon1}/>
          <PhotoH2>@turndownservice_seoul</PhotoH2>
        </PhotoCard>
        <PhotoCard>
          <PhotoIcon src={Icon2}/>
          <PhotoH2>@harongharong_</PhotoH2>
        </PhotoCard>
        <PhotoCard>
          <PhotoIcon src={Icon3}/>
          <PhotoH2>@cafe.beacon</PhotoH2>
        </PhotoCard>
      </PhotoWrapper>
    </PhotoContainer>
  )
}

export default Photo
