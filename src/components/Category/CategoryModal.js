import React, { useState } from 'react';
import styled from 'styled-components';
import WomanCategory from './CategoryType/WomanCategory';
import ManCategory from './CategoryType/ManCategory';
import KidsCategory from './CategoryType/KidsCategory';
import BeautyCategory from './CategoryType/BeautyCategory';

const CategoryModal = (props) => {
  const { categoryOpen } = props;

  // 카테고리 데이터를 배열로 정리하여 변수 만들기.
  const categoryData = ['WOMAN', 'MAN', 'KIDS', 'BEAUTY'];

  // 카테고리 버튼의 상태를 바꿔주기위해 useState 만들기.
  // 지정 인덱스 부분을 바꿔주는 변수를 만들고,
  // 클릭 이벤트가 있을 시, 변수자체를 setState로 지정하여 바꿔주기.
  const [btnActive, setBtnActive] = useState([true, false, false, false]);
  const tmp = [false, false, false, false];
  const menuClick = (index) => {
    if (btnActive[index] === false) {
      tmp[index] = true;
      setBtnActive(tmp);
    }
  };

  return (
    <Container className={categoryOpen ? 'active' : 'inactive'}>
      {categoryOpen ? (
        <MenuBox>
          <HeaderBox>
            {categoryData.map((item, idx) => {
              return (
                <span
                  key={idx}
                  onClick={() => menuClick(idx)}
                  className={btnActive[idx] ? 'active' : 'inactive'}
                >
                  {item}
                </span>
              );
            })}
          </HeaderBox>
          <DetailMenu>
            {/* 해당 인덱스 번호가 true 이면 해당 컴포넌트(디테일한 카테고리) 보여주기 */}
            {btnActive[0] === true ? <WomanCategory /> : null}
            {btnActive[1] === true ? <ManCategory /> : null}
            {btnActive[2] === true ? <KidsCategory /> : null}
            {btnActive[3] === true ? <BeautyCategory /> : null}
          </DetailMenu>
        </MenuBox>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding-top: 140px;
  display: flex;
  justify-content: left;
  text-align: center;
  &.active {
    background-color: white;
  }
`;

const MenuBox = styled.div`
  padding: 30px 0 30px 40px;
  width: 280px;
`;

const HeaderBox = styled.div`
  display: flex;
  span:hover {
    color: black;
  }

  span {
    margin-right: 20px;
    font-size: 13px;
    cursor: pointer;
    color: grey;
    &.active {
      color: black;
      font-weight: 500;
      border-bottom: 1px solid black;
    }
  }
`;

const DetailMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  max-height: 510px;
  height: 500px;
  div {
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

export default CategoryModal;
