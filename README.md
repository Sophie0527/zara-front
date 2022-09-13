# ZARA 메인 페이지 클론 프로젝트

ZARA online store clone project [ZARA Official Website](https://www.zara.com/kr/).

## 1. slider banner 구현.

라이브러리 없이 슬라이드 베너 구현.

![slider banner](https://user-images.githubusercontent.com/100933263/189878271-0955cafd-f80e-4565-bced-7340a3b61039.gif)

### 1) 버튼 클릭 이벤트 시, 슬라이더 위치 변경 / 버튼 유무 결정 / 버튼 글자 변경

**∙슬라이더 위치 변경**\
해당 부분을 useRef로 선택하여 스타일 변화하기.\
〈CSS〉 transform 속성 : 요소의 위치를 이동시킴.\
`transform:translate()`

**∙버튼 유무 결정**\
첫번째 베너에서는 왼쪽 버튼 안보임.\
마지막 베너에서는 오른쪽 버튼 안보임.

**∙버튼 글자 변경**\
베너 순서 ( WOMAN > MAN > KIDS > BEAUTY )에 따라 좌우 버튼 해당 글자로 변경.

### 2) 버튼 호버 시, 버튼 위치 이동.
<img width="150" alt="버튼 위치 이동" src="https://user-images.githubusercontent.com/100933263/189887518-3875e588-3873-430e-b5eb-a9c9c9b56902.gif">

**∙CSS 트렌스폼**\
요소의 위치를 이동시키는 속성.\
`transform:translate()`

**∙CSS 트랜지션**\
속성을 서서히 변화시키는 속성\
`transition-duration: 2s`


## 2. category modal 구현.

카테고리 박스 모달로 구현.
![category](https://user-images.githubusercontent.com/100933263/189891396-27bc4397-4519-4b1d-a174-ff3a2b49b747.gif)

### 1) header 메뉴 아이콘 클릭 시 카테고리 박스 생성
<img width="300" alt="카테고리 열기" src="https://user-images.githubusercontent.com/100933263/189896370-c367f78b-fa75-495c-a138-63631b6b4167.gif">

카테고리 클릭 시, setState(true)로 변경하여 카테고리 박스 보여주기.\
'X' 아이콘 클릭 시, setState(false)로 변경하여 카테고리 박스 숨기기. 

### 2) 카테고리 클릭 시, 해당 글자 스타일 변경 및 해당 디테일 카테고리 보여주기.
<img width="250" alt="카테고리 글자스타일 변경" src="https://user-images.githubusercontent.com/100933263/189896771-546b0a0a-350c-4db8-a5e4-31abe64ad25c.gif">

**∙글자 스타일 변경**\
글자 두껍게하기\
`border-bottom` 생성

**∙디테일 카테고리**\
클릭하는 카테고리에 따라 디테일 카테고리 컴포넌트 보여주기.

## Technlogies

 <div> 
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div> 
<br>

## Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)
