import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HashTag from '../components/modal/HashTag';
import SelectCategoriesTemplate from '../components/Category/SelectCategoriesTemplate';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { imageApi, instance } from '../public/api/axios';
import LinkTemplate from '../components/Link/LinkTemplate';
import PriceTemplate from '../components/Price/PriceTemplate';
import { getToken } from '../public/shared/localStorage';

function Open() {
    const navigate = useNavigate();
    const textRef = useRef();

    useEffect(() => {
      const token = getToken();
      if (!token) {
        navigate("/signin");
      }
    }, [navigate]);

    const [title, setTitle] = useState('');
    const [content, setContet] = useState('');
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState('');
    const [categoryCodes, setCategoryCodes] = useState([]);
    const [hashTag, setHashTag] = useState('');
    const [hashTags, setHashTags] = useState([]);
    const [links, setLinks] = useState([]);

    function onClickCloseButtonHandler(e) {
        navigate("/");
    }

    function handleOnKeyPress(e) {
        if (e.key === 'Enter' && hashTag.length > 0 && hashTags.length < 5) {
            const name = hashTag;
            setHashTags([name, ...hashTags]);
            setHashTag('');
        }
    };

    function onChangeInputContentHandler(){
        setContet(textRef.current.getInstance().getMarkdown())
    }

    const onUploadThumbnail = (file) =>{
        const formData = new FormData();
        formData.append("files", file);

        imageApi(formData).then((res) => {
          console.log(res.data);
          setThumbnail(res.data.responses[0].fileUrl);
        }).catch((err) => {
          alert("이미지 업로드 실패");
        });
    }

    function onClickOpenButtonHandler(e){
        instance.post(`/api/v1/mentoring`, {
            title: title,
            content: content,
            price: price,
            thumbnail: thumbnail,
            categoryCodes: categoryCodes,
            hashTags : hashTags,
            links: links
          }).then((res) => {
            navigate("/")
          }).catch((err) => {
            alert("개설 실패");
          });
    }

    return (
        <Container>
            <WriteBox>
                <TitleArea placeholder='제목을 입력하세요' onChange={(e) => setTitle(e.target.value)}></TitleArea>
                <TitleBoundary />
                <PriceTemplate  setPrice={setPrice} />
                <Template>
                    {hashTags.map((value, index) => (
                        <HashTag
                            key ={index}
                            hashtag={value}
                        />
                    ))}
                </Template>
                {hashTags.length < 5 &&  
                    <InputHashTag placeholder='해시태그를 입력하세요' onChange={(e) => setHashTag(e.target.value)} 
                    onKeyDown={handleOnKeyPress}  value={hashTag} />
                }
                <SelectCategoriesTemplate
                    setCategories={setCategoryCodes} /> 
                <LinkTemplate setLinks={setLinks} />
            </WriteBox>
            
            <ContentBox>
            <Editor
                ref={textRef}
                toolbarItems={[['image'], ['bold', 'italic', 'strike']]}
                initialValue="hello world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
                placeholder="내용을 입력해주세요 :)"
                onChange={onChangeInputContentHandler}
                hooks={{
                    addImageBlobHook: async (blob) => {
                      console.log(blob); 
                      onUploadThumbnail(blob)
                      return;
                    }
                  }}
            />
            </ContentBox>
            <BottomContainer>
                <OpenButton onClick={onClickCloseButtonHandler}>나가기</OpenButton>
                <OpenButton color='white' background='#58D3F7' onClick={onClickOpenButtonHandler}>멘토링 개설</OpenButton>
            </BottomContainer>
        </Container>
    )
}

export default Open

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin-top: 100px;
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 150px;
    padding: 20px;
`;



const WriteBox = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-bottom: 1px solid lightgray;
`

const TitleArea = styled.textarea`
    background: transparent;
    display: block;
    height: 70px;
    font-size: 2.75rem;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: bold;
    color: gray;
    
    &:focus {
        color: black;
  }
`
const TitleBoundary = styled.div`
    background: rgb(73, 80, 87);
    height: 6px;
    width: 4rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 1px;
`;

const Template = styled.div`
    display: flex;
    width: 100%;
    column-gap: 10px;
`

const ContentBox = styled.div`
    width: 100%;
    height: auto;
`


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

const InputHashTag = styled.input`
    background: transparent;
    display: inline-flex;
    outline: none;
    cursor: text;
    font-size: 1.125rem;
    line-height: 2rem;
    margin-bottom: 0.75rem;
    min-width: 8rem;
    border: none;
    color: gray;

    &:focus {
        color: black;
  }
`;