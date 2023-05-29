
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import zoom from '../../public/images/zoom.jpg'
import discord from '../../public/images/discord.png'
import kakao from '../../public/images/kakao.png'
import github from '../../public/images/github.png'
import other from '../../public/images/other.png'


function MentoringLink({ links }) {
    const [zoomLink, setZoomLink] = useState('')
    const [zoomOpen, setZoomOpen] = useState(false);
    const [discordLink, setDiscordLink] = useState('')
    const [discordOpen, setDiscordOpen] = useState(false);
    const [kakaoLink, setKakaoLink] = useState('')
    const [kakaoOpen, setKakaoOpen] = useState(false);
    const [githubLink, setGithubLink] = useState('')
    const [githubOpen, setGithubOpen] = useState(false);
    const [otherLink, setOtherLink] = useState('')
    const [otherOpen, setOtherOpen] = useState(false);

    useEffect(() => {
        links.forEach((value) => {
            if (value.linkType === 'ZOOM') {
                setZoomLink(value.url);
                setZoomOpen(true);
            } else if (value.linkType === 'DISCORD') {
                setDiscordLink(value.url);
                setDiscordOpen(true);
            }
            else if (value.linkType === 'KAKAO_TALK') {
                setKakaoLink(value.url);
                setKakaoOpen(true);
            }
            else if (value.linkType === 'GITHUB') {
                setGithubLink(value.url);
                setGithubOpen(true);
            }
            else if (value.linkType === 'OTHER') {
                setOtherLink(value.url);
                setOtherOpen(true);
            }
        });
    }, [])


    return (
        <LinkContainer>
            {zoomOpen &&
                <Circle onClick={(e) => {window.open(zoomLink)}}><CircleImage src={zoom} alt='zoom' /></Circle>
            }
            {discordOpen &&
                <Circle onClick={(e) => {window.open(discordLink)}}><CircleImage src={discord} alt='zoom' /></Circle>
            }
            {kakaoOpen &&
                <Circle onClick={(e) => {window.open(kakaoLink)}}><CircleImage src={kakao} alt='kakao' /></Circle>
            }
            {githubOpen &&
                <Circle onClick={(e) => {window.open(githubLink)}}><CircleImage src={github} alt='github' /></Circle>
            }
            {otherOpen &&
                <Circle onClick={(e) => {window.open(otherLink)}}><CircleImage src={other} alt='other' /></Circle>
            }
        </LinkContainer>
    )
}

const LinkContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 10px;
    height: 20px;
    width: 100%;
`;

const Circle = styled.div`
  width : 20px;
  height : 20px;
  border-radius: 50%;
  margin-right: 20px;

  
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

export default MentoringLink;
