import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import variables from "../../public/shared/variables";
import { CATEGORIES } from "../Category/CATEGORY";
import { HiOutlineChevronRight } from "react-icons/hi";

const CategoryBox = ({ closeCategory, categoryAnimation }) => {
  const [currentCity, setCurrentCity] = useState(1000);

  const subCategories = CATEGORIES.find(
    category => category.code === currentCity
  ).subCategories;

  const navigate = useNavigate();

  const moveToCategory = id => {
    navigate(`/`);
  };

  return (
    <S.CategoryBox
      onMouseLeave={closeCategory}
      categoryAnimation={categoryAnimation}
    >
      <S.Cities>
        {CATEGORIES.map(city => {
          return (
            <S.Category
              key={city.code}
              onMouseEnter={() => setCurrentCity(city.code)}
              isSelected={currentCity === city.code}
            >
              <CategoryDiv>
                <span>{city.name}</span>
                {currentCity === city.id && (
                  <span>
                    <HiOutlineChevronRight />
                  </span>
                )}
              </CategoryDiv>

            </S.Category>
          );
        })}
      </S.Cities>
      <S.SubCategories>
        {subCategories.map(subCategory => {
          return (
            <S.Category
              key={subCategory.code}
              onClick={() => moveToCategory(subCategory.code)}
            >
              <SubCategoryDiv>
                <span>{subCategory.name}</span>
              </SubCategoryDiv>
            </S.Category>
          );
        })}
      </S.SubCategories>
    </S.CategoryBox>
  );
};

const animation = {
  mount: keyframes`
  0%{
    opacity:0;
  } 100%{
    opacity:1;
  }
  `,
  unmount: keyframes`
  0%{
    opacity:1;
  } 100%{
    opacity:0;
  }
  `,
};

const S = {
  CategoryBox: styled.div`
    ${variables.customFlex()}
    position: absolute;
    top: 60px;
    left: 120px;
    width: 300px;
    height: 555px;
    background-color: white;
    border: none;
    box-shadow: 3px 3px 3px gray;
    color: #F4F4F4;
    animation: ${({ categoryAnimation }) =>
      categoryAnimation ? animation.mount : animation.unmount}
      0.1s;
    z-index: 5;
  `,
  Cities: styled.ul`
    width: 130px;
    height: 100%;
    border-right: 0.5px solid #F4F4F4;
  `,
  SubCategories: styled.ul`
    width: 170px;
    height: 100%;
    background-color: #FAFAFA;
  `,
  Category: styled.li`
    ${variables.customFlex("space-between", "center", "row")};
    width: 100%;
    height: 40px;
    color: ${({ isSelected }) =>
      isSelected ? "#2E64FE" : "black"};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #F2F2F2;
      color: ${({ theme }) => theme.brandColor};
    }
  `,
};

const CategoryDiv = styled.div`
  width: 100%;
    margin-top: 4px;
    margin-left: 25px;
`;

const SubCategoryDiv = styled.div`
font-size: 10px;
width: 100%;
  margin-top: 4px;
  margin-left: 25px;
`;

export default CategoryBox;