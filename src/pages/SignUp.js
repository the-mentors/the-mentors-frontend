import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { instance } from '../public/api/axios';
import baseProfile from "../public/images/baseProfile.png";
import Input from '../elements/Input';
import Button from '../elements/Button';

//<img src={mentors} height={30} alt="mentors logo" />


const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');


  const [profile, setProfile] = useState('');
  const imgRef = useRef();

  const handleClickSignupEvent = () => {
    if (email === '' || password === '' || nickname === '' || username === '') {
      alert("모든 정보를 입력해야합니다.");
      return;
    }
    instance.post(`/api/v1/users/signup`, {
      email: email ,
      password: password ,
      profileUrl: 'aa',
      nickname: nickname,
      username: username
    }).then((res) => {
      navigate("/signin")
    }).catch((err) => {
      alert("회원가입 실패");
    });
  }

  const onLoadProfile = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfile(reader.result);
    };
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  return (
    <Container>
      <form>
        <Circle >
          <Image src={profile ? profile : baseProfile} alt='profile' />
        </Circle>
        <input
          className="signup-profileImg-input"
          type="file"
          accept="image/*"
          id="image"
          onChange={onLoadProfile}
          ref={imgRef}
        />
      </form>
      <Box>
        <Input _id="emailInput" label="이메일 주소" placeholder="이메일 주소를 입력해주세요" is_user value={email} _onChange={(e) => { onChangeEmail(e); }} />
        <Input _id="passwordInput" label="패스워드" type="password" placeholder="패스워드를 입력해주세요" is_user value={password} _onChange={(e) => { onChangePassword(e); }} />
        <Input _id="nicknameInput" label="닉네임" placeholder="닉네임을 입력해주세요" is_user value={nickname} _onChange={(e) => { onChangeNickName(e); }} />
        <Input _id="usernameInput" label="이름" placeholder="이름을 입력해주세요" is_user value={username} _onChange={(e) => { onChangeUsername(e); }} />
        <Button margin="40px 0 0" text="회원가입" _onClick={handleClickSignupEvent} />
      </Box>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    margin: 150px auto;
    .form-signup input[type="file"] {
      display: none;
    }
`;

const Box = styled.div`
  margin: 15px auto;
  width: 70%;
`;

const Circle = styled.div`
  width : 150px;
  height : 150px;
  border-radius: 50%;
  margin: 10px;
  border: 1px solid lightgray;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

export default SignUp;