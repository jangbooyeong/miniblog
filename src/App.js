import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import LanguageViewPage from './component/page/LanguageViewPage';
import PortFolioViewPage from './component/page/PortFolioViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MainTitleText>FRONT-END BLOG</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="language/:postId" element={<LanguageViewPage />} />
        <Route path="portfolio/:postId" element={<PortFolioViewPage />} />
        <Route path="view/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;