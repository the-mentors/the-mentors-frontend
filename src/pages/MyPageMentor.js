import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getToken } from '../public/shared/localStorage';
import { instance } from '../public/api/axios';
import MentoringSubscribeCard from '../components/Card/MentoringSubscribeCard';


function MyPageMentor() {
    const navigete = useNavigate();
    const [hasNext, setHasNext] = useState(false);
    const [mentoring, setMentoring] = useState([]);
    const [size] = useState(6);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigete("/signin");
        }
    }, [navigete]);

    useEffect(() => {
        onHandlerGetMySubscribeContents(page);
    }, [])

    async function onHandlerGetMySubscribeContents(page) {
        await instance.get(`/api/v1/mypages?page=${page}&size=${size}`)
            .then((res) => {
                console.log(res.data.content);
                onChangeContents(res.data.content, res.data.last)
            })
            .catch((err) => { console.log(err) })
    }

    const onChangeContents = (contents, next) => {
        setMentoring([...mentoring, ...contents]);
        setHasNext(!next);
    }

    function onClickMoreButtonHandler(e) {
        onHandlerGetMySubscribeContents(page + 1);
        setPage(page + 1);
    }



    return (
        <Container>
            <NavContainer>
                <NavText color='gray' onClick={(e) => navigete("/mypage/subscribe")}>{'내 학습'}</NavText>
                <NavText color='black'>{'/'}</NavText>
                <NavText color='black' onClick={(e) => navigete("/mypage/mentor")}>{'개설한 멘토링'}</NavText>
            </NavContainer>

            <Template>
                {mentoring.map((value) => (
                    <MentoringSubscribeCard
                        key={value.id}
                        id={value.mentoring.id}
                        title={value.mentoring.title}
                        thumbnail={value.mentoring.thumbnail}
                        nickname={value.mentor.nickname}
                        profileUrl={value.mentor.profileUrl}
                        links={value.links}
                        isOpen={false}
                    />
                ))}
            </Template>
            {
                hasNext &&
                <MoreButton onClick={onClickMoreButtonHandler}>더보기</MoreButton>
            }
        </Container>
    )
}

export default MyPageMentor;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin-top: 100px;
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 150px;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 70px;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #e9ebee;;
`;


const NavText = styled.div`
    color: ${props => props.color};
    margin: 5px;    
    font-size: 2rem;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: bold;

    &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const Template = styled.div`
    display: grid;
    width: 80%;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;
`

const MoreButton = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 80%;
    padding: 0 12px;
    height: 40px;
    line-height: 1.47;
    font-weight: 500;
    font-size: 14px;
    color: #495057;
    letter-spacing: -.3px;
    
    border-radius: 4px;
    border: 1px solid #d5dbe2;

    &:hover{
      cursor: pointer;
    }

`;