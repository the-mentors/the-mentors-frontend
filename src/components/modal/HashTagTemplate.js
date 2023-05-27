import React, { useState } from 'react'
import styled from 'styled-components';
import HashTag from './HashTag';

function MentoringTemplete(props) {
    const [hashTags] = useState(props.hashTags);

    return (
        <Container>
            <Template>
                {hashTags.map((value) => (
                    <HashTag
                        key={value.id}
                        id={value.id}
                        hashtag={value.name}
                    />
                ))}
            </Template>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Template = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

export default MentoringTemplete
