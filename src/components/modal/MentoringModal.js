
import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';
import styled from 'styled-components';
import MentoringTemplete from './HashTagTemplate';
import { instance } from '../../public/api/axios';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

function MentoringModal({
    id,
    title,
    content,
    thumbnail,
    vote_average,
    price,
    isOwner,
    nickname,
    profileUrl,
    hashTags,
    created_date,
    setModalOpen
}) {
    const ref = useRef();
    useOnClickOutside(ref, () => { setModalOpen(false) });



    function onClickSubscribeButtonHandler(e){
        instance.post(`/api/v1/mentoring/${id}/subscribe`)
        .then((res) => {
            alert("멘토링 신청 완료")
          }).catch((err) => {
            console.log(err);
            alert("멘토링 신청 실패")
          });
    }

    return (
        <Container>
            <Wrapper>
                <Modal ref={ref}>
                    <Close onClick={() => setModalOpen(false)}>X</Close>
                    <MentoringImageBox>
                        <ImageBox
                            src={thumbnail}
                            alt='modal__poster-img'
                        />
                    </MentoringImageBox>
                    <UserInfoContainer>
                        <UserInfoBox>
                            <UserInfo>
                                <UserThumbnail>
                                    <CircleImage src={profileUrl} />
                                </UserThumbnail>
                                <UserNickname>{nickname}</UserNickname>
                            </UserInfo>
                            <Title>멘토링 소개 : {title}</Title>
                            <MentoringTemplete hashTags={hashTags}/>
                        </UserInfoBox>
                    </UserInfoContainer>
                    <Content>
                    <Viewer initialValue={content} />
                    </Content>

                    <SubscriberContainer>
                        <SubscriberBox>
                            <PriceBox>
                                <Price>1회 멘토링 : 1시간 / {price.toLocaleString()}원</Price>
                            </PriceBox>
                            <SubscriberButtonBox>
                                <SubscriberButton onClick={onClickSubscribeButtonHandler}>신청하기</SubscriberButton>
                            </SubscriberButtonBox>
                        </SubscriberBox>
                    </SubscriberContainer>
                </Modal>
            </Wrapper>
        </Container>
    )
}

export default MentoringModal

const Container = styled.div`
    z-index: 1200;
    position: absolute;
`;

const Modal = styled.div`
    position: relative;
    display: block;
    margin-top: 25px;
    max-width: 800px;
    min-width: 500px;
    height: 730px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
        0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    background: white;
    overflow: hidden;
    border-radius: 8px;
    transition: all 400ms ease-in-out 2s;
    animation: fadeIn 400ms;
`;

const Close = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    z-index: 1000;
    color: white;
`;

const Wrapper = styled.div`
    position: fixed;
    inset: 0px;
    background-color: rgb(0 0 0 / 71%);
    -webkit-tap-highlight-color: transparent;
    display: flex;
    justify-content: center;
`;

const UserInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 130px;
    padding-bottom: 20px;
`;

const UserInfoBox = styled.div`
    width: 90%;
    height: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 7px;
    border-bottom: 1px solid #e9ebee;
`

const UserInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    height: auto;
`;

const UserThumbnail = styled.div`
    width: 30px;
    height: 30px;
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
    padding-left: 5px;
    justify-content: start;
    align-items: center;
    width: 120px;
    height: 30px;
    font-size: 14px;
    font-style: inherit;
    font-weight: 550;
    color: #616568;
    text-decoration: underline;
`;

const Title = styled.h2`
    font-weight: 550;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 14px;
    color: #1b1c1d;
    font-style: inherit;
    margin-bottom: 8px;
    -webkit-font-smoothing: antialiased;
`;

const SubscriberContainer = styled.div`
    width: 100%;
    height: 100px;
    padding-top: 20px;
`;

const SubscriberBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    border-top: 1px solid #e9ebee;
`

const PriceBox = styled.div`
    padding-left: 20px;
    width: 70%;
    display: flex;
    justify-content: flex-start;
`;

const Price = styled.p`
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    font-weight: 600;
    font-style: inherit;
    -webkit-font-smoothing: antialiased;
`;

const SubscriberButtonBox = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
`;

const SubscriberButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    margin-top: 10px;
    border-radius: 4px;
    border-color: #00c471;
    font-weight: 700;
    background-color: #00c471;
    color: white;

    &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const MentoringImageBox = styled.div`
  width: 100%;
  height: 300px;
`;

const ImageBox = styled.img`
  width: 100%;  
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
    padding: 10px;
    height: 200px; 
    overflow-y: scroll;
`;

const MarkDownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;