import React from 'react';
import styled from 'styled-components';
import IntroListItem from './IntroListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  white-space: pre-wrap;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function IntroList(props) {
  const { lists } = props;

  return (
    <Wrapper>
      {lists.map((list, index) => {
        return <IntroListItem key={list.id} list={list} />;
      })}
    </Wrapper>
  );
}

export default IntroList;