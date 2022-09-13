import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ViewContent() {
  // 슬라이더 위치 값을 위한 state
  const [slideState, setSlideState] = useState(0);
  // 왼쪽/오른쪽 버튼 글자 값을 위한 state
  const [leftBtn, setLeftBtn] = useState('');
  const [rightBtn, setRightBtn] = useState('MAN');
  // 왼쪽/오른쪽 버튼의 유무 값을 위한 state
  const [isLeftBtn, setIsLeftBtn] = useState(false);
  const [isRightBtn, setIsRightBtn] = useState(true);

  // 오른쪽 버튼 클릭 시, 조건에 따른 변화
  // slideState가 0이면 : translate(-100%)이되고, 왼쪽버튼은 woman 텍스트로 바뀌어 보이고, 오른쪽버튼은 kids로 바뀜.
  // slideState가 1이면 : translate(-200%)이되고, 왼쪽버튼은 MAN 텍스트로 바뀌고, 오른쪽버튼은 BEAUTY로 바뀜.
  // slideState가 2이면 : translate(-300%)이되고, 왼쪽버튼은 kids 텍스트로 바뀌고, 오른쪽버튼이 안보이게 함.
  const handleBannerRight = () => {
    if (slideState === 0) {
      setSlideState(slideState + 1);
      setLeftBtn('WOMAN');
      setRightBtn('KIDS');
      setIsLeftBtn(true);
    } else if (slideState === 1) {
      setSlideState(slideState + 1);
      setLeftBtn('MAN');
      setRightBtn('BEAUTY');
    } else if (slideState === 2) {
      setSlideState(slideState + 1);
      setLeftBtn('KIDS');
      setIsRightBtn(false);
    }
  };
  //왼쪽 버튼 클릭 시, 조건에 따른 변화
  // slideState가 1이면 : translate(0%)이되고, 왼쪽버튼은 안보이게하고, 오른쪽버튼은 MAN으로 바뀜.
  // slideState가 2이면 : translate(-100%)이되고, 왼쪽버튼은 WOMAN 텍스트로 바뀌고, 오른쪽버튼은 KIDS로 바뀜.
  // slideState가 3이면 : translate(-200%)이되고, 왼쪽버튼은 MAN 텍스트로 바뀌고,  오른쪽버튼은 BEAUTY로 바뀜.
  const handleBannerLeft = () => {
    if (slideState === 1) {
      setSlideState(slideState - 1);
      setRightBtn('MAN');
      setIsLeftBtn(false);
    } else if (slideState === 2) {
      setSlideState(slideState - 1);
      setLeftBtn('WOMAN');
      setRightBtn('KIDS');
    } else if (slideState === 3) {
      setSlideState(slideState - 1);
      setLeftBtn('MAN');
      setRightBtn('BEAUTY');
      setIsRightBtn(true);
    }
  };
  // BannerImages div의 정보를 가져와서 변화시키기 위한 useRef
  const slideRef = useRef();
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translate(-${slideState}00%)`;
  }, [slideState]);
  // 베너 이미지 데이터를 변수로 담기.
  const banners = [
    {
      id: 1,
      src: 'https://cdn.pixabay.com/photo/2020/06/16/14/39/beach-5305878_1280.jpg',
      alt: 'banner1.jpg',
    },
    {
      id: 2,
      src: 'https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631_1280.jpg',
      alt: 'banner2.jpg',
    },
    {
      id: 3,
      src: 'https://cdn.pixabay.com/photo/2021/04/30/22/57/model-6220003_1280.jpg',
      alt: 'banner3.jpg',
    },
    {
      id: 4,
      src: 'https://cdn.pixabay.com/photo/2020/06/08/10/00/black-5273871_1280.jpg',
      alt: 'banner4.jpg',
    },
  ];

  return (
    <Container>
      <BannerLeftBtns onClick={handleBannerLeft}>
        <div>
          {isLeftBtn ? (
            <>
              <img
                src="https://img.icons8.com/external-android-line-2px-amoghdesign/344/external--multimedia-line-24px-android-line-2px-amoghdesign-2.png"
                alt="왼쪽방향"
              ></img>
              <button>{leftBtn}</button>
            </>
          ) : null}
        </div>
      </BannerLeftBtns>
      <BannerBox>
        <BannerImages ref={slideRef}>
          {banners.map((banner, num) => {
            return (
              <div key={num}>
                <img alt={banner.alt} src={banner.src}></img>
              </div>
            );
          })}
        </BannerImages>
      </BannerBox>
      <BannerRightBtns onClick={handleBannerRight}>
        <div>
          {isRightBtn ? (
            <>
              <button>{rightBtn}</button>
              <img
                src="https://img.icons8.com/external-android-line-2px-amoghdesign/344/external--multimedia-line-24px-android-line-2px-amoghdesign-3.png"
                alt="오른쪽방향"
              ></img>
            </>
          ) : null}
        </div>
      </BannerRightBtns>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 140px 20px 0 20px;
`;

const BannerBox = styled.div`
  background-color: whitesmoke;
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  ${CustomMediaStyle.lessThan('desktop')`
    width: 700px;
    height: 500px;
	`}
  ${CustomMediaStyle.lessThan('tablet')`
    width: 550px;
    height: 500px;
	`} 
  ${CustomMediaStyle.lessThan('mobile')`
    width: 390px;
    height: 450px;
	  `}
`;

const BannerImages = styled.div`
  display: flex;
  div {
    background-color: whitesmoke;
    img {
      width: 1000px;
      height: 600px;
      object-fit: cover;
      ${CustomMediaStyle.lessThan('desktop')`
    width: 700px;
    height: 500px;
	    `}
      ${CustomMediaStyle.lessThan('tablet')`
    width: 550px;
    height: 500px;
	`}
    ${CustomMediaStyle.lessThan('mobile')`
    width: 390px;
    height: 450px;
	  `}
    }
  }
`;

const BannerLeftBtns = styled.div`
  display: flex;
  text-align: center;
  div:hover {
    transition-duration: 2s;
    transform: translate(-10px);
  }
  div {
    display: flex;
    ${CustomMediaStyle.lessThan('mobile')`
    display: flex;
    flex-direction: column;
    align-items: center;
	  `}
  }
  button {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 50px;
    height: 30px;
    border: none;
    background-color: white;
    cursor: pointer;
    margin: 0 10px;
    letter-spacing: 0.5px;
    transform: scaleY(1.3);
    ${CustomMediaStyle.lessThan('tablet')`
    width: 30px;
    font-size: 10px;
	  `}
    ${CustomMediaStyle.lessThan('mobile')`
    justify-content: center;
	  `}
  }
  img {
    width: 20px;
    cursor: pointer;
    ${CustomMediaStyle.lessThan('tablet')`
    width: 10px;
	  `}
    ${CustomMediaStyle.lessThan('mobile')`
    width: 15px;
    margin-bottom: 3px;
	  `}
  }
`;

const BannerRightBtns = styled.div`
  display: flex;
  text-align: center;
  div:hover {
    transition-duration: 2s;
    transform: translate(10px);
  }
  div {
    display: flex;
    ${CustomMediaStyle.lessThan('mobile')`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
	  `}
  }
  button {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 50px;
    height: 30px;
    border: none;
    background-color: white;
    cursor: pointer;
    margin: 0 10px;
    letter-spacing: 0.5px;
    transform: scaleY(1.3);
    ${CustomMediaStyle.lessThan('tablet')`
    width: 30px;
    font-size: 10px;
	  `}
    ${CustomMediaStyle.lessThan('mobile')`
    justify-content: center;
	  `}
  }
  img {
    width: 20px;
    cursor: pointer;
    ${CustomMediaStyle.lessThan('tablet')`
    width: 10px;
	  `}
    ${CustomMediaStyle.lessThan('mobile')`
    width: 15px;
    margin-bottom: 3px;
	  `}
  }
`;

export default ViewContent;
