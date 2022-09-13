import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ViewFooter() {
  return (
    <Container>
      <span>NEW</span>
      <span>일부 품목 최대 40% 할인</span>
      <span>BASICS</span>
      <span>BEAUTY</span>
      <span>슈즈</span>
      <span>란제리</span>
      <span>의류 관리</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 50px;
  ${CustomMediaStyle.lessThan('tablet')`
    flex-wrap: wrap;
    align-content: center;
    padding: 50px 30px 0 30px;
	`}
  span:hover {
    font-weight: 600;
  }
  span {
    padding: 0 30px;
    font-size: 14px;
    cursor: pointer;
    ${CustomMediaStyle.lessThan('tablet')`
  padding: 10px 20px;
	`}
  }
`;

export default ViewFooter;
