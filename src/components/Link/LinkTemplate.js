import React, { useState } from 'react'
import styled from 'styled-components';
import zoom from '../../public/images/zoom.jpg'
import discord from '../../public/images/discord.png'
import kakao from '../../public/images/kakao.png'
import github from '../../public/images/github.png'
import other from '../../public/images/other.png'


function LinkTemplate({setLinks}) {
    const [currnetLink, setCurrnentLink] = useState([]);
    const [zoomLink, setZoomLink] = useState('')
    const [zoomOepn, setZoomOpen] = useState(false);
    const [discordLink, setDiscordLink] = useState('')
    const [discordOepn, setDiscordOpen] = useState(false);
    const [kakaoLink, setKakaoLink] = useState('')
    const [kakaoOepn, setKakaoOpen] = useState(false);
    const [githubLink, setGithubLink] = useState('')
    const [githubOepn, setGithubOpen] = useState(false);
    const [oteherLink, setOtherLink] = useState('')
    const [otherOepn, setOtherOpen] = useState(false);

    function onHandleKeyPressWithZoom(e) {
        if (e.key === 'Enter' && zoomLink.length > 0 ) {
            const type = 1;
            const url = zoomLink;
            const newLink = {type, url};
            setLinks([newLink, ...currnetLink]);
            setCurrnentLink([newLink, ...currnetLink]);
            setZoomOpen(true);
        }
    };


    function onHandleKeyPressWithDiscord(e) {
        if (e.key === 'Enter' && discordLink.length > 0 ) {
            const type = 2;
            const url = discordLink;
            const newLink = {type, url};
            setLinks([newLink, ...currnetLink]);
            setCurrnentLink([newLink, ...currnetLink]);
            setDiscordOpen(true);
        }
    };

    function onHandleKeyPressWithKakao(e) {
        if (e.key === 'Enter' && kakaoLink.length > 0 ) {
            const type = 3;
            const url = kakaoLink;
            const newLink = {type, url};
            setLinks([newLink, ...currnetLink]);
            setCurrnentLink([newLink, ...currnetLink]);
            setKakaoOpen(true);
        }
    };

    function onHandleKeyPressWithGithub(e) {
        if (e.key === 'Enter' && githubLink.length > 0) {
            const type = 4;
            const url = githubLink;
            const newLink = {type, url};
            setLinks([newLink, ...currnetLink]);
            setCurrnentLink([newLink, ...currnetLink]);
            setGithubOpen(true);
        }
    };

    function onHandleKeyPressWithOther(e) {
        if (e.key === 'Enter' && oteherLink.length > 0) {
            const type = 5;
            const url = oteherLink;
            const newLink = {type, url};
            setLinks([newLink, ...currnetLink]);
            setCurrnentLink([newLink, ...currnetLink]);
            setOtherOpen(true);
        }
    };

    return (
        <LinkContainer>
            <LinkUrlBox>
                <Circle> <CircleImage src={zoom} alt='zoom' /></Circle>
                <LinkUrlInput placeholder='링크를 입력하세요' alt='1' onKeyDown={onHandleKeyPressWithZoom}
                 onChange={(e) => setZoomLink(e.target.value)} value={zoomLink} disabled={zoomOepn} />
                 { zoomOepn && <div>✔️</div>  }
            </LinkUrlBox>

            <LinkUrlBox>
                <Circle> <CircleImage src={discord} alt='discord' /></Circle>
                <LinkUrlInput placeholder='링크를 입력하세요' alt='2' onKeyDown={onHandleKeyPressWithDiscord} 
                onChange={(e) => setDiscordLink(e.target.value)} value={discordLink} disabled={discordOepn} />
                { discordOepn && <div>✔️</div>  }
            </LinkUrlBox>

            <LinkUrlBox>
                <Circle> <CircleImage src={kakao} alt='kakao' /></Circle>
                <LinkUrlInput placeholder='링크를 입력하세요' alt='3' onKeyDown={onHandleKeyPressWithKakao} 
                onChange={(e) => setKakaoLink(e.target.value)} value={kakaoLink} disabled={kakaoOepn} />
                { kakaoOepn && <div>✔️</div>  }
            </LinkUrlBox>

            <LinkUrlBox>
                <Circle> <CircleImage src={github} alt='github' /></Circle>
                <LinkUrlInput placeholder='링크를 입력하세요' alt='4' onKeyDown={onHandleKeyPressWithGithub} 
                onChange={(e) => setGithubLink(e.target.value)} value={githubLink} disabled={githubOepn} />
                { githubOepn && <div>✔️</div>  }
            </LinkUrlBox>

            <LinkUrlBox>
                <Circle> <CircleImage src={other} alt='other' /></Circle>
                <LinkUrlInput placeholder='링크를 입력하세요' alt='5' onKeyDown={onHandleKeyPressWithOther} 
                onChange={(e) => setOtherLink(e.target.value)} value={oteherLink} disabled={otherOepn} />
                { otherOepn && <div>✔️</div>  }
            </LinkUrlBox>
        </LinkContainer>
    )
}

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

const LinkUrlBox = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-bottom: 3px;
`;

const Circle = styled.div`
  width : 15px;
  height : 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

const LinkUrlInput = styled.input`
    background: transparent;
    display: inline-flex;
    outline: none;
    border: none;
    font-size: 1.125rem;
    line-height: 2rem;
    min-width: 20rem;
    color: gray;
    
    &:focus {
        color: black;
  }
`;




export default LinkTemplate;
