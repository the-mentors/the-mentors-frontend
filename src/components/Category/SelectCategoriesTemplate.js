import React, { useState } from 'react'
import styled from 'styled-components'
import SelectCategories from './SelectCategories';

function SelectCategoriesTemplate({setCategories}) {
  const [categoryNames, setCategoryNames] = useState([]);

  return (
    <Container>
        <Template>
            {categoryNames.map((value, idx) => (
                <Tag key={idx}>{value}</Tag>
            ))}
        </Template>
        {
            categoryNames.length < 5 && 
            <SelectCategories setCategoryNames={setCategoryNames} setCategories={setCategories} />
        }
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`

const Template = styled.div`
    display: flex;
`

const Tag = styled.div`
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    margin-right: 10px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 8px;
    padding: 4px 8px;
    text-align: center;
    color: white;
    background: lightblue;
`;


export default SelectCategoriesTemplate
