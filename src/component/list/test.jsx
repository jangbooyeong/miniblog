import React from 'react';

function LanguageListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <ImageContainer src={post.imageUrl}></ImageContainer>
      <Container>
        <TitleText>{post.title}</TitleText>
        <ContentText>{post.content}</ContentText>
      </Container>
    </Wrapper>
  );
}

export default LanguageListItem;




