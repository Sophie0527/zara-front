import React from 'react';
import styled from 'styled-components';

function BeautyCategory() {
  return (
    <BeautyBox>
      <span>COLLECTION</span>
      <br />
      <p>ABOUT</p> <p>STORIES</p>
      <p>VR STORE</p> <p>STORES</p>
    </BeautyBox>
  );
}

const BeautyBox = styled.div`
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

export default BeautyCategory;
