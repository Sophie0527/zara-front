import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CategoryModal from '../Category/CategoryModal';

function Header() {
  // header 메뉴 아이콘 클릭 시 카테고리 박스 생성 (모달로 구현)
  const [categoryOpen, setCategoryOpen] = useState(false);
  const openCategoryModal = () => {
    if (!categoryOpen) {
      setCategoryOpen(true);
    } else {
      setCategoryOpen(false);
    }
  };
  // 로고 클릭 시 메인페이지로 이동 (+ window.location.reload() //리랜더링)
  const navigate = useNavigate();

  return (
    <Container>
      <CategoryModal categoryOpen={categoryOpen} />
      <HeaderBox>
        <HeaderLeft>
          <button onClick={openCategoryModal}>
            {categoryOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faAlignJustify} />
            )}
          </button>
          <h1
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
          >
            ZARA
          </h1>
        </HeaderLeft>
        <HeaderRight>
          <div>
            <Link to="/">
              <span>검색</span>
            </Link>
          </div>
          <Link to="/">
            <span>로그인</span>
          </Link>
          <Link to="/">
            <span>도움말</span>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </HeaderRight>
      </HeaderBox>
    </Container>
  );
}
const Container = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  text-transform: uppercase;
`;

const HeaderBox = styled.div`
  padding: 24px 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
`;

const HeaderLeft = styled.div`
  align-items: flex-start;
  display: flex;
  button {
    position: fixed;
    margin-top: 6px;
    margin-right: 10px;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  h1 {
    margin-left: 56.5px;
    font-family: 'DM Serif Display', serif;
    font-size: 100px;
    letter-spacing: -15px;
    transform: scaleY(1.5);
    color: black;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  margin-left: 19px;
  font-size: 18px;
  div {
    a {
      margin-right: 230px;
      padding-right: 32px;
      border-bottom: 0.5px solid black;
      span {
        font-weight: 500;
        color: black;
      }
    }
  }
  a {
    margin-left: 24px;
    span {
      font-weight: lighter;
      color: black;
    }
    svg {
      color: black;
      padding-right: 6px;
    }
  }
`;

export default Header;
