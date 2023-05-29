import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MentoringCard from './MentoringCard';
import { instance } from '../../public/api/axios';
import PaginationComponent from './PaginationComponent';
import MentoringModal from '../modal/MentoringModal';
import { MENTORING_AI_MOCK } from './MentorsMock';

import MentorsRecommandTemplate from './MentorsRecommandTemplate';


function MentoringTemplete() {
  const [mentorings, setMentoring] = useState([]);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiMentorings, setAiMentoring] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [mentoringSelected, setMentoringSelected] = useState({});
  const [size] = useState(12);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    onHandlerGetContents(page);
  }, []);

  useEffect(() => {
    onHandlerGetRecommandMentoring();
  }, []);

  async function onHandlerGetRecommandMentoring(){
    setAiMentoring(MENTORING_AI_MOCK);
    setAiOpen(true);
  }

  async function onHandlerGetContents(page) {
    await instance.get(`/api/v1/mentoring?page=${page}&size=${size}`)
      .then((res) => {
        onChangeContents(res.data.content, res.data.totalPages)
      })
      .catch((err) => { console.log(err) })
  }

  const onChangeContents = (contents, totalPages) => {
    setMentoring(contents)
    setTotalPage(totalPages)
  }

  function handleContentClick(id) {
    instance.get(`/api/v1/mentoring/${id}`)
      .then((res) => {
        setModalOpen(true);
        setMentoringSelected(res.data);
      })
  };

  return (
    <Container>
      {
        aiOpen && <MentorsRecommandTemplate
          aiMentorings={aiMentorings}
          handleContentClick={handleContentClick}
        />      
      }
      <SubConiner>
        <Title>전체 강의</Title>
      </SubConiner>
      <Template>
        {mentorings.map((value) => (
          <MentoringCard
            key={value.id}
            id={value.id}
            title={value.title}
            cotent={value.content}
            thumbnail={value.thumbnail}
            price={value.price}
            nickname={value.userResponse.nickname}
            profileUrl={value.userResponse.profileUrl}
            handleContentClick={handleContentClick}
          />
        ))}
      </Template>
      <PaginationComponent
        totalPage={totalPage}
        page={page}
        setPage={setPage}
        onHandlerGetContents={onHandlerGetContents}
      />

      {modalOpen && (
        <MentoringModal
          id={mentoringSelected.id}
          title={mentoringSelected.title}
          hashTags={mentoringSelected.hashTags.hashTags}
          isOwner={mentoringSelected.isOwner}
          price={mentoringSelected.price}
          thumbnail={mentoringSelected.thumbnail}
          content={mentoringSelected.content}
          username={mentoringSelected.userResponse.username}
          nickname={mentoringSelected.userResponse.nickname}
          profileUrl={mentoringSelected.userResponse.profileUrl}
          setModalOpen={setModalOpen} />
      )}
    </Container>
  )
}


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

const SubConiner = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: x-large;
  color: black;
`;


const Template = styled.div`
    display: grid;
    width: 100%;
    margin-left: 30px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
export default MentoringTemplete
