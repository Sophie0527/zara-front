import React from 'react';
import styled from 'styled-components';

function WomanCategory() {
  return (
    <WomanBox>
      <span>NEW</span>
      <span>BEST SELLER NEW</span>
      <span>ATUMN VIBE</span>
      <span>BASICS</span>
      <p>코트 | 트랜치 코트</p> <p>다운 | 패딩</p>
      <p>블레이저</p> <p>자켓 | 오버셔츠</p> <p>베스트</p>
      <p>원피스 | 점프수트</p> <p>셔츠</p> <p>니트</p>
      <p>티셔츠</p> <p>맨투맨</p> <p>탑</p>
      <p>팬츠</p>
      <p>진 | 데님팬츠</p> <p>스커트</p>
      <p>쇼츠 | 버뮤다팬츠</p> <p>수트</p>
      <span>TOTAL LOOK</span>
      <p>슈즈</p> <p>백</p> <p>특가상품</p> <p>액세서리</p>
      <p>란제리</p>
      <span>BEAUTY</span> <p>향수</p>
    </WomanBox>
  );
}

const WomanBox = styled.div`
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

export default WomanCategory;
