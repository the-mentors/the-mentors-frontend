import React, { useState } from 'react'
import styled from 'styled-components';

function PriceTemplate({setPrice}) {
  const [viewPrice, setViewPrice] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function onHandleKeyPressHandler(e) {
    if (e.key === 'Enter' ) {
        setPrice(viewPrice);
        setIsOpen(true);
    }
};    

  return (
    <PriceContainer>
        <InputPrice placeholder='시간당 가격을 입력하세요' disabled={isOpen} 
        onChange={(e) => setViewPrice(e.target.value)}
        value={viewPrice} onKeyDown={onHandleKeyPressHandler}/>
        {isOpen && <div>✔️</div>}
    </PriceContainer>
  )
}

export default PriceTemplate

const PriceContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

const InputPrice = styled.input`
    background: transparent;
    display: inline-flex;
    outline: none;
    cursor: text;
    font-size: 1.125rem;
    line-height: 2rem;
    min-width: 15rem;
    border: none;
    color: gray;

    &:focus {
        color: black;
  }
`;