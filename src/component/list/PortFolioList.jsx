import React from 'react';
import styled from 'styled-components';
import PortFolioListItem from './PortFolioListItem';

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5px;
  gap: 16px;

  @media (max-width: 779px) {
    flex-direction: column;
  }
`;

function PortFolioList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PortFolioListItem
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

export default PortFolioList;