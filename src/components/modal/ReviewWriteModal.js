import React, { useRef, useState } from 'react'
import { ImStarFull } from "react-icons/im";
import useOnClickOutside from '../../hooks/useOnClickOutside';
import styled from 'styled-components';
import { instance } from '../../public/api/axios';

function ReviewWriteModal({
    id,
    setModalOpen
}) {
    
    const ref = useRef();
    useOnClickOutside(ref, () => { setModalOpen(false) });
    const [content, setContent] = useState('');
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    function onHandleStarClick(index) {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };

    async function onClickReviewWriteHandler(e){
        let score = clicked.filter(Boolean).length;
        await instance.post(`/api/v1/mentoring/${id}/reviews`, {
            rating: score,
            content: content,
          }).then((res) => {
            setModalOpen(false);
            alert("리뷰 작성 성공")
          }).catch((err) => {
            alert("리뷰 작성 실패");
          });
    }


    return (
        <Container>
            <Wrapper>
                <Modal ref={ref}>
                    <StarContainer>
                        <StartBox>
                            {[1, 2, 3, 4, 5].map((el) => (
                                <RatingBox>
                                    <ImStarFull
                                        key={el}
                                        onClick={() => onHandleStarClick(el)}
                                        className={clicked[el] && 'black'}
                                        size="35"
                                    />
                                </RatingBox>))}
                        </StartBox>
                        <StarText>별점을 선택해주세요</StarText>
                    </StarContainer>
                    <ReviewArea placeholder='좋은 수강평을 남겨주시면 지식공유자와 이후 배우는 사람들에게 큰 도움이 됩니다! (5자이상)'
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <BottomContainer>
                        <OpenButton onClick={(e) => setModalOpen(false)}>취소</OpenButton>
                        <OpenButton color='white' background='#58D3F7' onClick={onClickReviewWriteHandler}>등록</OpenButton>
                    </BottomContainer>
                </Modal>
            </Wrapper>
        </Container >
    )
}

export default ReviewWriteModal


const Container = styled.div`
    z-index: 1200;
    position: absolute;
`;

const Modal = styled.div`
    position: relative;
    display: block;
    margin-top: 150px;
    max-width: 800px;
    min-width: 500px;
    height: 400px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
        0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    background: #f8f9fa;
    overflow: hidden;
    border-radius: 8px;
    transition: all 400ms ease-in-out 2s;
    animation: fadeIn 400ms;
    padding: 20px;
`;

const Wrapper = styled.div`
    position: fixed;
    inset: 0px;
    background-color: rgb(0 0 0 / 71%);
    -webkit-tap-highlight-color: transparent;
    display: flex;
    justify-content: center;
`;

const StarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px;
`;

const StartBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px;
`

const RatingBox = styled.div`
    margin: 3px;
  & svg {
    color: #C4C4C4;
    cursor: pointer;
  }
  :hover svg {
    color: #FFFF00;
  }
  & svg:hover ~ svg {
    color: #C4C4C4;
  }
  .black {
    color: #FFFF00;
  }
`;

const StarText = styled.div`
    font-weight: 450;
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    color: #343a40;
    text-align: center;
    font-style: inherit;
`;


const BottomContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-top: 20px;
    border-top: 1px solid lightgray;
    padding-right: 20px;
`;

const OpenButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 4px;
    border-color: #00c471;
    font-weight: 700;
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'black'};

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
  }
`;

const ReviewArea = styled.textarea`
    display: block;
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    padding: 13px 12px;
    width: 100%;
    min-height: 150px;
    outline: none;
    border: 1px solid lightgray;
    background-color: #fff;
    color: #495057;
    resize: none;
`;
