import styled from "styled-components";
import logo from "../public/images/logo.png";


const Error = () => {
    return (
      <Box>
        <Intro>
          <h1><img src={logo} alt="mentors logo" /></h1>
          <h1>500 SERVER ERROR</h1>
          <h2>현재 서버 오류로 인해 일시적으로 사용이 불가능 합니다.<br/></h2>
        </Intro>
        <Select>
          
        </Select>
      </Box>
    );
  }
  
  const Box = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;
  
  const Intro = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    h1 {
      display: flex;
      font-weight: bold;
      justify-content: center;
      img {
        width: 40%;
      }
    }
  
    h2 {
      font-weight: bold;
      margin-top: 10px;
    }
  
    p {
      text-align: center;
      margin-top: 20px;
    }
  `
  
  const Select = styled.div`
    position: relative;
  `;

  export default Error;