import React from 'react'
import styled from 'styled-components';

function HashTag(props) {
  const {hashtag} = props;

  return (
    <div>
        <Tag>{hashtag}</Tag>
    </div>
  )
}

export default HashTag

const Tag = styled.div`
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 8px;
    padding: 4px 8px;
    text-align: center;
    color: #00c471;
    background: #e5f9f1;
`;