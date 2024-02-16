import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: powderblue;
  }
`;

const ContentTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ContentText = styled.p`
  font-size: 16px;
`;

function IntroListItem(props) {
  const { list } = props;

  return (
    <Wrapper>
      <ContentTitle>{list.title}</ContentTitle>
      <ContentText>{list.content}</ContentText>
    </Wrapper>
  );
}

export default IntroListItem;