import React from 'react'
import styled from 'styled-components';
import MentoringCard from './MentoringCard';

function MentoringTemplete() {
  return (
    <Container>
      <MentoringCard></MentoringCard>
      <MentoringCard></MentoringCard>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    margin-top: 150px;
    margin-bottom: 150px;
`;


export default MentoringTemplete
