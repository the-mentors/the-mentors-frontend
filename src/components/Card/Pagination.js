
import React from 'react'
import styled from 'styled-components';

function Pagination({ totalPage, page, setPage, onHandlerGetContents}) {
    const currentPages = page;
    const numPages = (page + 4 >= totalPage ? totalPage : page + 4);
    return (
        <>
            <Nav>
                <Button
                    onClick={() => { setPage(currentPages - 1); onHandlerGetContents(currentPages - 1);} }
                    disabled={page === 0}>
                    이전페이지
                </Button>
                {Array(numPages)
                    .fill()
                    .map((_, i) => {
                        return (
                            <Button
                                key={i}
                                onClick={() => { setPage(i); onHandlerGetContents(i);}}
                                aria-current={currentPages === i ? "page" : null}
                                >
                                {i + 1}
                            </Button>
                        )
                    })}
                <Button
                    onClick={() => { setPage(currentPages + 1); onHandlerGetContents(currentPages + 1);}}
                    disabled={page === totalPage - 1}>
                    다음페이지
                </Button>
            </Nav>
        </>
    )
}


const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: lightgray;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-weight: bold;
  margin: 3px;
  font-size: 1rem;

  &:hover {
    border-color: gray;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: lightgray;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #58D3F7;
    color: white;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination
