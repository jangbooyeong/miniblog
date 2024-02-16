import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LanguageList from '../list/LanguageList';
import PortFolioList from '../list/PortFolioList';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import IntroData from '../../data/IntroData.json';
import ContentData from '../../data/ContentData.json';
import data from '../../data/data.json';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container720 = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Container1020 = styled.div`
  width: 100%;
  max-width: 1020px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

function MainPage(props) {
  const {} = props;

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container1020>
        <LanguageList
          posts={IntroData}
          onClickItem={(item) => {
            navigate(`/language/${item.id}`);
          }}
        />
      </Container1020>
      
      <Container1020>
        <Title>PROJECT</Title>
        <PortFolioList
          posts={ContentData}
          onClickItem={(item) => {
            navigate(`/portfolio/${item.id}`);
          }}
        />
      </Container1020>
      
      <Container720>
        <Title>POST</Title>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />

        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/view/${item.id}`);
          }}
        />
      </Container720>
    </Wrapper>
  );
}

export default MainPage;