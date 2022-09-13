import React from 'react';
import styled from 'styled-components';

function ManCategory() {
  return (
    <ManBox>
      <span>NEW</span>
      <span>ATUMN VIBE</span>
      <span>ZARA ATHLTICZ</span>
      <span>BASICS</span>
      <span>TREND</span>
      <span>OFFICE LOOK</span>
      <p>점퍼</p> <p>슈트</p>
      <p>셔츠</p>
      <p>티셔츠</p> <p>폴로</p> <p>쇼츠</p>
      <p>데님팬츠</p>
      <p>맨투맨 | 후디</p> <p>니트 | 가디건</p>
      <p>오버셔츠</p> <p>블레이저</p>
      <p>베스트</p>
      <p>트렌치코트 | 파카</p>
      <p>트레이닝룩</p>
      <p>슈즈</p>
      <p>백</p> <p>특가상품</p> <p>악세서리</p>
      <p>향수</p>
      <span>BEAUTY</span>
    </ManBox>
  );
}

const ManBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  span:hover {
    font-weight: 500;
    color: tomato;
  }
  p:hover {
    color: black;
    font-weight: 400;
  }

  span {
    padding: 3px 0;
    font-size: 13px;
    font-weight: 300;
    cursor: pointer;
  }
  p {
    padding: 3px 0;
    font-size: 13px;
    color: grey;
    font-weight: 100;
    cursor: pointer;
  }
`;

export default ManCategory;
