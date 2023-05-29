import React, { useEffect, useState } from 'react'
import { SELECT_CATEGORIES } from './CATEGORY';
import Select from "react-select";
import styled from 'styled-components';
import { isEmptyObj } from '../../public/shared/utils';

function SelectCategories({setCategoryNames, setCategories}) {
    const [names, setNames] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([]);
    const [formData] = useState(SELECT_CATEGORIES);

    function iteralSelectItem(code){
        let result = {};
        SELECT_CATEGORIES.forEach((item) => {
            if(item.value === code){
                result = item;
            }
        })
        return result;
    }

    function onSelectCategoryHandler(e){
        if(!currentCategory.includes(e.value)){
            const item = iteralSelectItem(e.value);
            inputCategories(item);
            recursionSetParent(item.value);
        }
    }

    function recursionSetParent(code){
        const children = iteralSelectItem(code);
        const parent = iteralSelectItem(children.parent);
        if(!isEmptyObj(parent) && !currentCategory.includes(parent.value)){
            inputCategories(parent);
            recursionSetParent(parent.value);
        }
    }

    function inputCategories(item){
        setNames([item.label, ...names]);
        setCurrentCategory([item.value, ...currentCategory]);
    }
    useEffect(() => { setCategoryNames(names)}, [names])
    useEffect(() => { setCategories(currentCategory)}, [currentCategory])


    return (
        <Template>
            <Select
                options={formData}
                onChange={onSelectCategoryHandler}
                placeholder="카테로리를 선택해주세요"
                defalutValue={formData[0]}
            />
        </Template>
    )
}

const Template = styled.div`
    width: 250px;
`

export default SelectCategories;