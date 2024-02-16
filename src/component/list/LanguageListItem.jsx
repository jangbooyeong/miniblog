import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  overflow: hidden;
  transition: all .35s;

  margin-bottom: 16px; 

  &:last-child {
    margin-bottom: 0; 
  }

  @media (max-width: 779px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.img`
  width: 50%;
  height: auto;
  @media (max-width: 779px) {
    width: 100%;
  }
`
//검은배경이 나오는 효과
const Container = styled.div`
  width: 50%; 
  height: auto;
  padding: 16px;
  position: relative;

  &::after {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    opacity: 0;
    z-index:-1;
    transition: all .35s;

    ${Wrapper}:hover & {
      opacity: 1;
    }
  }

  @media (max-width: 779px) {
    width: calc(100% - 16px);
    padding: 8px;
  }
`;

const TitleText = styled.p`
  z-index:2;
  font-size: 18px;
  font-weight: 700;

  ${Wrapper}:hover & {
    color: white;
  }
`;

const ContentText = styled.p`
  font-size: 16px;

  ${Wrapper}:hover & {
    color: white;
  }
`;

function LanguageListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <ImageContainer src={post.imageUrl}></ImageContainer>
      <Container>
        <TitleText>{post.title}</TitleText>
        <ContentText>{post.content}</ContentText>
      </Container>
    </Wrapper>
  );
}

export default LanguageListItem;