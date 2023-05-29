import styled from "styled-components"
import baseImage from "../../public/images/baseProfile.png"

function MentoringCard(props) {
  const {id, title, thumbnail, price, profileUrl, nickname} = props;
  var tempPrice = 10000;

  return (
    <Card onClick={() => props.handleContentClick(id)}>
      <CardImage>
        <Image src={thumbnail ? thumbnail : baseImage} alt="썸네일" />
      </CardImage>
      <CardContent>
        <Title>{title} </Title>
        <SubDiv>
            <Star>⭐ 4.8</Star>
            <Price>\{price? price.toLocaleString() : tempPrice.toLocaleString()}</Price>
        </SubDiv>
      </CardContent>
      <UserInfo>
        <UserThumbnail><CircleImage src={profileUrl ? profileUrl : baseImage}/></UserThumbnail>
        <UserNickname>{nickname? nickname : '우진'}</UserNickname>
      </UserInfo>
    </Card>
  )
}

export default MentoringCard

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 250px;
    border: 1px solid lightgray;
    margin-bottom: 10px;
    margin-left: 3px;

    &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;


const CardImage = styled.div`
  width: 199px;
  height: 150px;
  background-color: gray;
  border: 1px solid lightgray;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 70px;
`;

const Title = styled.div`
    width: 90%;
    display: -webkit-box;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    flex-shrink: 0;
    font-size: 0.875rem;
    line-height: 1.125rem;
    background-color: white;
    font-weight: bold;
`;


const SubDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 30px;
`;

const Price = styled.div`
    display : flex;
    align-items : center;
    width: 90px;
    height: 30px;
    color: blue;
    font-size: 17px;
    font-weight: bold;
`;

const Star = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width: 100px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border: 1px solid lightgray;
`;

const UserThumbnail = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid lightgray;
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;  
`;

const UserNickname = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    font-size: 14px;
    font-style: unset;
    color: lightgray;
`;