import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 34px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;

  &:hover {
    background: lightgrey;
    border: 1px solid black;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

// 화면에 아이템을 만드는 함수
function PostListItem(props) {

  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;