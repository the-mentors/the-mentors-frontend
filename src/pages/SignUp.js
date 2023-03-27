import styled from 'styled-components';


const SignUp = () => {
  return (
    <Container>
      <form>
        <label className="signup-profileImg-label" htmlFor="profileImg">프로필 이미지 추가</label>
        <input
          className="signup-profileImg-input"
          type="file"
          accept="image/*"
          id="profileImg"
        />
      </form>
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
    
    .signup-profileImg-label {
    margin: 5px 0 20px 0;
    font-weight: bold;
    font-size: 13px;
    color: #0095f6;
    display: inline-block;
    cursor: pointer;
    }

    .form-signup input[type="file"] {
      display: none;
    }
`;

export default SignUp;