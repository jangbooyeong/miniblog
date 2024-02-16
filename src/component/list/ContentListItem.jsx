import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: clac(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
`;
const ImageContainer = styled.img`
  width: 100%;
  height: auto;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ContentText = styled.p`
  font-size: 16px;
`;

function ContentListItem(props) {
  const { list } = props;

  return( 
    <Wrapper>
      <ImageContainer src={list.imageUrl}></ImageContainer>
      <TitleText>{list.title}</TitleText>
      <ContentText>{list.content}</ContentText>
    </Wrapper>
  );
}

export default ContentListItem;