import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5px;
  
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// key값에 해당하는 리스트 만드는 함수
function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default PostList;