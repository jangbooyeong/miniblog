import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 8px;
  background: powderblue;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;
// 버튼 클릭시 이벤트 발생하는 함수
function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default Button;