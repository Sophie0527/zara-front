import React from 'react';
import styled from 'styled-components';

function KidsCategory() {
  return (
    <KidsBox>
      <span>가을맞이, 한옥여행</span>
      <br />
      <p>GRIL | 만6세 - 14세</p>
      <p>BOY | 만6세 - 14세</p>
      <p>BABY GRIL | 6개월 - 만5세</p>
      <p>BABY BOY | 6개월 - 만5세</p>
      <p>MINI | 0 - 12개월</p>
      <br />
      <span>ACCESSORIES</span>
      <span>JOIN LIFE</span>
    </KidsBox>
  );
}

const KidsBox = styled.div`
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

export default KidsCategory;
