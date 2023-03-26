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


const Nav = () => {
  const dropdownRef = useRef(null);
  const [search, setSearch] = useState('');
  // const [menuLists, setMenuLists] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const token = getToken();

  const handleDropdown = e => {
    e.stopPropagation();
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  
  useEffect(() => {
    const pageClickEvent = e => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener('mousedown', pageClickEvent);
    }

    return () => {
      window.removeEventListener('mousedown', pageClickEvent);
    };
  }, [isOpen]);

  const onChange = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  // useEffect(() => {
  //   fetch('/categories', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setMenuLists(data);
  //     });
  // }, []);

  return (
    <NavContainer>
      <NavTop>
        <GridWrap>
          <GridSubWrap>
            <BsList className="icon" onMouseDown={handleDropdown} />
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
            <Link to="/signin">
              <BsBell className="icon" />
            </Link>
            <Link to="/signin">
              <BsPerson className="icon" />
            </Link>
          </MenuIconWrap>
        </GridWrap>
      </NavTop>
      <DropdownMenu ref={dropdownRef} className={isOpen ? 'active' : ''}>
        {/* <GridWrap>
          {menuLists.map(({ url, title, image, id }) => (
            <li key={id}>
              <Link to={`/category/${url}`}>
                <img src={image} alt={title} />
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </GridWrap> */}
      </DropdownMenu>
    </NavContainer>
  );
};

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

const GridSubWrap = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const NavTop= styled.div`
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

  a {
    display: flex;
    align-items: center;
    color: #000;
  }

  a:last-child .icon {
    margin-right: 0;
    font-size: 26px;
  }
`;


const DropdownMenu = styled.ul`
  display: flex;
  position: absolute;
  width: 100%;
  height: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.style.middleGrey};

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  div {
    gap: 30px;
    justify-content: flex-start;
  }
  li {
    width: 200px;
    overflow: hidden;
    border-radius: 10px;
  }
  a {
    position: relative;
    display: block;

    background-color: #000;
    &:hover img {
      opacity: 0.5;
    }

    img {
      width: 100%;
      display: block;
      object-fit: contain;
      transition: all 0.2s ease-in-out;
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  }
`;

export default Nav;
