import React from 'react'
import styled from 'styled-components';
import baseImage from "../../public/images/baseProfile.png"


function MentorsAiCard(props) {
    const { id, title, thumbnail, nickname, profileUrl } = props;
    return (
        <Card onClick={() => props.handleContentClick(id)}>
            <CardImage><Image src={thumbnail} alt="썸네일" /></CardImage>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <UserInfo>
                    <UserThumbnail><CircleImage src={profileUrl? profileUrl : baseImage} /></UserThumbnail>
                    <UserNickname>by {nickname}</UserNickname>
                </UserInfo>
            </CardContent>
        </Card>

    )
}

export default MentorsAiCard


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 260px;
    margin-left: 15px;
    &:hover {
    transform: translateY(-2px);
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
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
    margin-top: 5px;
    width: 250px;
    height: 80px;
    padding-left: 15px;
`;

const CardTitle = styled.h3`
    width: 100%;
    height: 35px;
    text-align: left;
    color: rgb(12, 12, 12);
    -webkit-text-fill-color: rgb(12, 12, 12);
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    flex-shrink: 0;
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    font-style: inherit;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
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
    font-size: 12px;
    font-style: unset;
    color: gray;
`;