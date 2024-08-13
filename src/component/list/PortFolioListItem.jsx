import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  background: white;
`;

//어두운 배경이 나오는 효과
const Effect = styled.div`
  position:relative;
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 8px;

  &::after {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    opacity: 0;
    z-index: 1;
    transition: all .35s;

    ${Wrapper}:hover & {
      opacity: 1;
    }
  }
`;

//텍스트내려오는 효과
const Htop = styled.p`
  margin: 0;
  position: absolute;
  bottom: 150%;
  left: 30px;
  color: #fff;
  font-size: 26px;
  font-weight: 900;
  z-index: 2;
  transition: all .35s;
  ${Wrapper}:hover & {
    bottom: 52%;
  }
`;

//텍스트내려오는 효과
const Hbottom = styled.p`
  margin: 0;
  position: absolute;
  top: 150%;
  left: 30px;
  color: #fff;
  font-size: 12px;
  transition: all .35s;
  z-index: 2;
  ${Wrapper}:hover & {
  top: 52%;
  }
`
const ImageContainer = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  width: calc(100% - 32px);
  padding: 16px;

  @media (max-width: 779px) {
    width: calc(100% - 16px);
    padding: 8px;
  }
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ContentText = styled.p`
  font-size: 16px;
`;


function PortFolioListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <Effect>
        <Htop>{post.title}</Htop>
        <Hbottom>{post.detail}</Hbottom>
        <ImageContainer src={process.env.PUBLIC_URL + post.imageUrl}></ImageContainer>
        <Container>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </Container>
      </Effect>
    </Wrapper>
  );
}

export default PortFolioListItem;