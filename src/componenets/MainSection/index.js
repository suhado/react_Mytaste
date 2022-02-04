import React, {useState} from 'react';
import Video from 'src/videos/video.mp4';
import {
    MainContainer,
    MainBg,
    VideoBg,
    MainContent,
    MainH1,
    MainP,
    MainBtnWrapper,
    MainButton,
    ArrowForward,
    ArrowRight
} from './MainElements';

const MainSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <MainContainer id="home">
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <MainH1>Main section</MainH1>
        <MainP>
          Everyone has phrase in their mind, songs that are comforted by listening, and spaces to relax. Let me introduce my phrase, song, and space first.
        </MainP>
        <MainBtnWrapper>
          <MainButton
            to="/developer"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About Developer {hover ? <ArrowForward /> : <ArrowRight/>}
          </MainButton>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default MainSection
