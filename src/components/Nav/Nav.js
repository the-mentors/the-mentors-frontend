import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  BsList,
  BsBell,
  BsPerson,
  BsSearch,
} from 'react-icons/bs';
import { getToken, removeToken } from '../../public/shared/localStorage';
import mentors from "../../public/images/mentors.png";
import CategoryBox from '../Category/CategoryBox';

const Nav = () => {
  let menuRef = useRef();
  const [search, setSearch] = useState('');
  const [menuLists, setMenuLists] = useState([]);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categoryAnimation, setCategoryAnimation] = useState(true);


  const openCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const closeCategory = () => {
    setCategoryAnimation(false);
    setTimeout(() => {
      setIsCategoryOpen(false);
      setCategoryAnimation(true);
    }, 100);
  };

  const onChange = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (getToken()) {
      fetch('/categories', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setMenuLists(data);
        });
    }
  }, []);

  return (
    <NavContainer>
      <NavTop>
        <GridWrap>
          <GridSubWrap>
            {getToken() ?
              (<BsList className="icon" onMouseDown={openCategory} />) :
              (<div></div>)
            }
            <Logo>
              <Link to="/"><img src={mentors} height={30} alt="mentors logo" /></Link>
            </Logo>
          </GridSubWrap>

          <SearchForm>
            <InputBox
              placeholder="어떤 멘토링을 찾으시나요?"
              onChange={onChange}
              value={search}
            />
            <BsSearch className="searchIcon" />
          </SearchForm>
          <MenuIconWrap>
            <button>
              <Link to="/signin">멘토링 개설</Link>
            </button>
            <Link to="/signin">
              <BsBell className="icon" alt="alarm" />
            </Link>

            <div className='menu-container' ref={menuRef}>
              <div className='menu-trigger' onClick={() => { setIsUserOpen(!isUserOpen) }}>
                <BsPerson className="icon" alt="prifile" />
              </div>
              <div className={`dropdown-menu ${isUserOpen ? 'active' : 'inactive'}`} >

                {getToken() ? (
                  <ul>
                    <img src="https://avatars.githubusercontent.com/u/106054507?s=400&u=e2d2e7d673cbb4e1269be8ad52e6fc05058adcd8&v=4" alt='프로필사진' />
                    <DropdownItem text={"프로필 수정"} isRemove ={false} link={"/main"} />
                    <DropdownItem text={"로그아웃"} isRemove ={true} link={"/signin"} removeToken={removeToken} />
                  </ul>
                ) :
                  (<DropdownItem text={"로그인"} isRemove ={false} link={"/signin"} />
                  )}
              </div>
            </div>
          </MenuIconWrap>
        </GridWrap>
      </NavTop>

      <HeaderContainer>
        {isCategoryOpen && (
          <CategoryBox
            closeCategory={closeCategory}
            categoryAnimation={categoryAnimation}
          />
        )}
      </HeaderContainer>
    </NavContainer>
  );
};

function DropdownItem(props) {
  function handlerClickEvent(e){
    if(props.isRemove){
      props.removeToken();
    }
  }

  return (
    <li className='dropdownItem' onClick={handlerClickEvent}>
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}



const NavContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.style.lightGrey};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  a {
    text-decoration: none;
  }
`;

const GridWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const HeaderContainer = styled.div`
    display: flex;
    width: 720px;
    top: 0;
    left: 0;
    margin-top: 70px;
    margin-left: 300px;
`;


const GridSubWrap = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const NavTop = styled.div`
  padding: 20px 0;
  background-color: #fff;
  z-index: 99;

  .icon {
    font-size: 22px;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.style.fontLogo};
  font-weight: 700;
  a {
    color: ${({ theme }) => theme.style.primaryColor};
  }
`;

const SearchForm = styled.div`
  position: relative;
  width: 50%;
  padding: 0 50px;

  .searchIcon {
    position: absolute;
    top: 50%;
    left: 70px;
    transform: translateY(-50%);
    color: ${props => props.theme.style.middleGrey};
    font-weight: 700;
  }
`;

const InputBox = styled.input`
  padding: 0 50px;
  width: 100%;
  height: 35px;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.style.lightGrey};
  &::placeholder {
    color: ${({ theme }) => theme.style.middleGrey};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.style.lightBlue};
    background-color: #fff;
  }
`;

const MenuIconWrap = styled.div`
  display: flex;


  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    margin-right: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    a {
      display: flex;
      font-weight: bold;
      font-size: 12px;
      font-family: "Noto Sans KR", sans-serif;
    }
  }

  a {
    display: flex;
    align-items: center;
    color: #000;
  }

  a:last-child .icon {
    position: absolute;
    margin-right: 0;
    font-size: 26px;
  }

  div {
    display: flex;
    align-items: center;
    color: #000;
  }

  div:last-child .icon {
    margin-right: 0;
    font-size: 26px;
  }

  .dropdown-menu{
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 70px;
    background-color: #FFF;
    border-radius: 10px;
    padding: 10px 20px;
    width: 140px;
    box-shadow: 3px 3px 3px gray;
    border: 1px solid #F4F4F4
  }
  
  .dropdown-menu.active{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: var(--speed) ease;
  }
  
  .dropdown-menu.inactive{
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: var(--speed) ease;
  }
  
  h3{
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    font-size: 18px;
    color: var(--primary-text-color);
    line-height: 1.2rem;
  }
  
  h3 span{
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  .dropdown-menu ul{
    display: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .dropdown-menu ul li{
    align-items: center;
    padding: 10px  0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .dropdown-menu ul li:hover a{
    color: rgb(212, 33, 9);
    cursor: pointer;
  }
  
  .dropdown-menu ul li:hover img{
    opacity: 1;
    cursor: pointer;
  }

  .dropdownItem{
    display: flex;
    margin: 10px auto;
  }

  .dropdown-menu ul img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    cursor: pointer;
  }

  
  .dropdownItem img{
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    transition: var(--speed);
  }
  
  .dropdownItem a{
    max-width: 100px;
    margin-left: 10px;
    transition: var(--speed);
  }
`;

export default Nav;
