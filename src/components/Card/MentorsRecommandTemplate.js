import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import ai from '../../public/images/ai.PNG';
import MentorsAiCard from './MentorsAiCard';
import styled from 'styled-components';

function MentorsRecommandTemplate(props) {
    const {aiMentorings } = props;

  return (
    <AiContainer>
          <SubConiner>
            <AiImageBox>
              <AiImage src={ai} />
            </AiImageBox>
            <Title>가 추천하는 강의</Title>
          </SubConiner>
          <StyledSwipper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              1000: {
                slidesPerView: 4,
              }
            }}
          >
            {aiMentorings.map((value) => (
              <StyledSwipperSlide key={value.id}>
                <MentorsAiCard
                  key={value.id}
                  id={value.id}
                  title={value.title}
                  thumbnail={value.thumbnail}
                  nickname={value.userResponse.nickname}
                  profileUrl={value.userResponse.profileUrl}
                  handleContentClick={props.handleContentClick}
                />
              </StyledSwipperSlide>
            ))}
          </StyledSwipper>
        </AiContainer>
  )
}

export default MentorsRecommandTemplate;

const AiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const SubConiner = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`;


const StyledSwipper = styled(Swiper)`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`

const StyledSwipperSlide = styled(SwiperSlide)`
    width: 250px;
    height: 260px;

`

const AiImageBox = styled.div`
    width: 130px;
    height: 55px;
`;

const AiImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

const Title = styled.p`
  font-weight: bold;
  font-size: x-large;
  color: black;
`;