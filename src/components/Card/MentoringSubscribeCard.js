import React from 'react'
import styled from 'styled-components';
import baseImage from "../../public/images/baseProfile.png"
import MentoringLink from '../Link/MentoringLink';

function MentoringSubscribeCard(props) {
    const { id, title, thumbnail, profileUrl, nickname, links, isOpen } = props;

    return (
        <div>
            <Card>
                <CardImage>
                    <Image src={thumbnail} alt="썸네일" />
                    {isOpen && 
                        <ReviewContainer>
                            <ReviewBox onClick={(e) => props.handleContentClick(id)}>📃 리뷰 작성</ReviewBox>
                        </ReviewContainer>
                    }
                </CardImage>
                <CardContent>
                    <Title>{title}</Title>
                    <UserInfo>
                        <UserThumbnail><CircleImage src={profileUrl ? profileUrl : baseImage} /></UserThumbnail>
                        <UserNickname>by {nickname}</UserNickname>
                    </UserInfo>
                    <MentoringLink links={links} />
                </CardContent>
            </Card>
        </div>
    )
}

export default MentoringSubscribeCard;


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 300px;
    margin-left: 15px;
    &:hover {
    transform: translateY(-2px);
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 250px;
  height: 180px;
  border-radius: 4px;
  background-color: gray;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 250px;
    height: 80px;
    padding-left: 15px;
`;

const Title = styled.div`
    width: 100%;
    font-weight: 700;
    margin-top: 5px;
    line-height: 1.5em;
    height: 2rem;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 20px;
`;

const UserThumbnail = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid lightgray;
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

const UserNickname = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 10px;
    height: 30px;
    font-size: 14px;
    font-style: unset;
    color: black;
`;

const ReviewContainer = styled.div`
   position: absolute;
   z-index: 10;
   width: 100%;
   padding: 20px;
   top: 100px;
   height: 64px;
`;

const ReviewBox = styled.div`
   position: relative;
   display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    background-color: #1b1c1d;
    border: 2px solid #00c471;
    color: white;
    font-weight: 500;
    line-height: 1.43;
    font-size: 14px;
   
   &:hover {
    transform: translateY(-2px);
  }
`; 