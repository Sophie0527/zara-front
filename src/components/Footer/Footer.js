import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Footer() {
  return (
    <Container>
      <FooterBox>
        <h2>뉴스레이터에 가입하세요</h2>
        <ul>
          <Link to="/">
            <li>TIKTOK</li>
          </Link>
          <Link to="/">
            <li>INSTAGRAM</li>
          </Link>
          <Link to="/">
            <li>FACEBOOK</li>
          </Link>
          <Link to="/">
            <li>TWITTER</li>
          </Link>
          <Link to="/">
            <li>PINTEREST</li>
          </Link>
          <Link to="/">
            <li>KAKAO</li>
          </Link>
          <Link to="/">
            <li>YOUTUBE</li>
          </Link>
          <Link to="/">
            <li>SPOTIFY</li>
          </Link>
        </ul>
      </FooterBox>
      <CompanyInfo>
        아이티엑스코리아 유한회사 ｜ 사업자등록번호: 120-88-14733 ｜ 대표자 :
        ROMAY DE LA COLINA JOSE MANUEL ｜ 서울시 강남구 영동대로 511 (삼성동,
        트레이드타워 33층) ｜ 대표번호: 080-479-0880 | 이메일:
        contact.kr@zara.com ｜ 호스팅 서비스 사업자: ITX Merken, B.V. ｜
        통신판매업신고 : 제2014-서울강남-02297 (사업자정보확인) |
        개인정보처리방침 | 이용약관
      </CompanyInfo>
    </Container>
  );
}
const Container = styled.div`
  margin: 0 70px;
`;
const FooterBox = styled.div`
  flex-grow: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  h2 {
    margin-top: 200px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3px;
    font-weight: lighter;
  }
  ul {
    margin-bottom: 200px;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin-top: 100px;
    font-size: 10px;
    line-height: 14px;
    li {
      margin: 8px;
      letter-spacing: 0.8px;
      transform: scaleY(1.3);
      color: black;
    }
  }
`;
const CompanyInfo = styled.div`
  margin: 12px 0 56px 56.5px;
  padding: 8px 0;
  width: 40%;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  ${CustomMediaStyle.lessThan('tablet')`
  width: 70%;
  margin:  0 ;
	  `}
`;

export default Footer;
