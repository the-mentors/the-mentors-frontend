import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../public/api/elements';
import { emailCheckReg } from '../public/shared/emailCheck';
import { Link } from 'react-router-dom';
import { instance } from "../public/api/axios";
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Grid from '../elements/Grid';


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginButtonClick = () => {
    instance.post(`api/v1/singin`, {
      email: email, password: password
    }).then((res) => {
      localStorage.setItem(ACCESS_TOKEN ,res.data.ACCESS_TOKEN);
      localStorage.setItem(REFRESH_TOKEN ,res.data.REFRESH_TOKEN);
      navigate("/");
    })
    .catch((err) => {
      alert("로그인 실패");
      navigate("/signin");
    });
  }

  // 경고창 없애는 함수
  const noneWarningSigns = () => {
    const warningEmail = document.getElementById('WarningEmail');
    warningEmail.style.display = 'none';

    const warningPw = document.getElementById('WarningPw');
    warningPw.style.display = 'none';

    const pleaseEmail = document.getElementById('pleaseEmail');
    pleaseEmail.style.display = 'none';

    const pleasePW = document.getElementById('pleasePW');
    pleasePW.style.display = 'none';

    const emailInput = document.getElementById('emailInput');
    emailInput.style.border = '1px solid rgb(230, 230, 230)';

    const pwInput = document.getElementById('pwInput');
    pwInput.style.border = '1px solid rgb(230, 230, 230)';
  };

  const onChangeEmail = (e) => {
    noneWarningSigns();
    setEmail(e.target.value);
  };


  const onChangePw = (e) => {
    noneWarningSigns();
    setPassword(e.target.value);
  };

  const onClick = () => {
    if (email === '' && password === '') {
      const emailInput = document.getElementById('emailInput');
      emailInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleaseEmail = document.getElementById('pleaseEmail');
      pleaseEmail.style.display = 'block';

      const pwInput = document.getElementById('pwInput');
      pwInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleasePW = document.getElementById('pleasePW');
      pleasePW.style.display = 'block';

      return;
    }

    if (email === '') {
      const pleaseEmail = document.getElementById('pleaseEmail');
      pleaseEmail.style.display = 'block';

      const emailInput = document.getElementById('emailInput');
      emailInput.style.border = '1px solid rgb(236, 99, 94)';

      return;
    }

    if (password === '') {
      const pleasePW = document.getElementById('pleasePW');
      pleasePW.style.display = 'block';

      const pwInput = document.getElementById('pwInput');
      pwInput.style.border = '1px solid rgb(236, 99, 94)';

      return;
    }

    if (password.length < 6) {
      const warningPw = document.getElementById('WarningPw');
      warningPw.style.display = 'block';

      const pwInput = document.getElementById('pwInput');
      pwInput.style.border = '1px solid rgb(236, 99, 94)';

      return;
    }

    if (!emailCheckReg(email)) {
      const warningEmail = document.getElementById('WarningEmail');
      warningEmail.style.display = 'block';

      const emailInput = document.getElementById('emailInput');
      emailInput.style.border = '1px solid rgb(236, 99, 94)';

      return;
    }

    loginButtonClick();
  };

  return (
    <Container>
      <div className="loginBox">
        <Grid>
          <Input
            _id="emailInput"
            label="이메일 주소"
            placeholder="이메일 주소를 입력해주세요"
            is_user
            value={email}
            _onChange={(e) => {
              onChangeEmail(e);
            }}
          />
          <Waring id="pleaseEmail">이메일 주소를 입력해주세요.</Waring>
          <Waring id="WarningEmail">이메일 형식에 맞게 입력하세요.</Waring>
          <Input
            _id="pwInput"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            is_user
            value={password}
            type="password"
            _onChange={(e) => {
              onChangePw(e);
            }}
          />
          <Waring id="pleasePW">비밀번호를 입력해주세요.</Waring>
          <Waring id="WarningPw">비밀번호는 6자 이상이어야 합니다.</Waring>
          <Button margin="40px 0 0" text="로그인" _onClick={onClick} />
        </Grid>

        <Grid margin="50px 0px 0px">
          <Text size="12px" weight="500" color="rgb(158, 158, 158)">
            아직 멘토스에 계정이 없으신가요?
            <Link to="/signup">회원가입</Link>
          </Text>
        </Grid>
      </div>
    </Container>
  );
};


const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  align-items: center;
  max-width: 1500px;
  margin: 150px auto;

  flex: 1 1 0px;
  .loginBox {
    max-width: 1200px;
    min-width: 600px;
    @media (max-width: 1080px) {
      max-width: 500px;
      margin: 0 auto;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 50px;
      text-align: left;
    }
    .socialBox {
      margin: 70px 0 0;
    }
  }
`;


const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0;
  background-color: rgb(230, 230, 230);
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
`;

const CircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 20px;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Waring = styled.p`
  display: none;
  font-size: 13px;
  line-height: 20px;
  color: #ff5757;
  margin: 0 0 12px;
`;

export default SignIn;