import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import IntroList from '../list/IntroList';
import Button from '../ui/Button';
import IntroData from '../../data/IntroData.json';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1020px;

  & > * {
    :not(:last-child) {
      margin-bottom:16px;
    }
  }
`;

const TitleText = styled.p`
  padding: 8px 16px;
  background: #FCE29F;
  font-size: 16px;
  font-weight: 500;
  color: grey;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

function LanguageViewPage(props) {
  const naviate = useNavigate();
  const { postId } = useParams();

  const post = IntroData.find((item) => {
    return item.id == postId;
  });

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            naviate("/");
          }}
        />
        <TitleText>{post.title}</TitleText>
        <IntroList lists={post.lists} />
      </Container>
    </Wrapper>
  );
}

export default LanguageViewPage;