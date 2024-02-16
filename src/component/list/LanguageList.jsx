import React from 'react';
import styled from 'styled-components';
import LanguageListItem from './LanguageListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5px;

  &:hover > :not(:hover) {
    transform:scale(0.9);
  }

  & > :hover {
    transform: scale(1.02);
  }
`;

function LanguageList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return(
          <LanguageListItem
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

export default LanguageList;