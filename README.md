<div align="center">
  <h1><img src="public/readme/banner.png"/></h1> 
</div>

> 서비스는 아쉽게도 종료되었습니다. 🥹

<br/>

<p align=center>

<div align=center>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FLeets-Official%2FWeNeed-FE&count_bg=%23333333&title_bg=%23FC4F59&icon=&icon_color=%23FC4F59&title=hits&edge_flat=false)](https://hits.seeyoufarm.com"/></a>
</div>

<br />

## ✍🏻 프로젝트 개요

나의 커리어 일기장 위닛
We Need, Win It 🎯
<br />

위닛은 자신의 작업물을 손쉽게 홍보하고, 동시에 동료를 구할 수 있는 서비스입니다!
각자의 고유한 색채가 담긴 프로젝트, 작품, 디자인을 손쉽게 홍보하고 구경하세요. 🙌
<br />

특정 작업물이 마음에 드셨나요?
그렇다면 이제 함께하고 싶은 이들에게 위닛을 통해 연락해보세요!
위닛과 함께라면, 지향하는 가치관과 부합하는 동료들을 찾는 것은 어렵지 않답니다 🤗
<br />
<br />

필요한 이들이 모여 승리를 쟁취하는 곳
여러분의 성장기록 위닛과 함께해주세요!

<br />

## ⚙️ 기술 스택

<table>
    <thead>
        <tr>
            <th>분류</th>
            <th>기술 스택</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                  <p>프론트엔드</p>
            </td>
            <td>
                  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"/>
                  <img src="https://img.shields.io/badge/typescript-1572B6?style=flat&logo=typescript&logoColor=000000"/>
                  <img src="https://img.shields.io/badge/tailwindcss-1252B6?style=flat&logo=tailwindcss&logoColor=white"/>
                  <img src="https://img.shields.io/badge/recoil-61DAFB?style=flat&logo=recoil&logoColor=000000"/>
            </td>
        </tr>
        <tr>
            <td>
                <p>백엔드</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Docker-2496ED?&logo=Docker&logoColor=white">
              <img src="https://img.shields.io/badge/Spring_Boot-%236DB33F?logo=springboot&logoColor=white">
              <img src="https://img.shields.io/badge/Spring_JPA-%236DB33F?logo=spring&logoColor=white">
            </td>
        </tr>
        <tr>
            <td>
                <p>협업</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Notion-000000?logo=Notion">
                <img src="https://img.shields.io/badge/Figma-F24E1E?logo=Figma&logoColor=ffffff">
            </td>
        </tr>
    </tbody>

</table>

<br />

## 🧡 FE 팀원 소개

|                                                             김나영                                                              |                                     최민규                                     |                                    조혜원                                     |
| :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/70098144?s=400&u=0d205e74937390beac28c6ea7fb8f0cec539495d&v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/99270060?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/101498350?v=4" width="120"> |
|                                                             **FE**                                                              |                                     **FE**                                     |                                    **FE**                                     |
|                                         [@nayoung3669](https://github.com/nayoung3669)                                          |                  [@Minkyu0424](https://github.com/Minkyu0424)                  |                 [@One-HyeWon](https://github.com/One-HyeWon)                  |

<br />

## 🖥️ 화면 구성

### 메인 / 상세 조회

<p align="center"><img src="public/readme/메인1.png"align="center" width="45%"><img src="public/readme/메인2.png"align="center" width="45%"></p>
<p align="center"><img src="public/readme/상세2.png"align="center" width="45%"><img src="public/readme/상세1.png"align="center" width="45%"></p>

<br />

### 게시물 작성 (포트폴리오, 크루찾기) / 지원서 / 모집서 작성

<p align="center">  <img src="public/readme/작성1.png"align="center" width="32%">  <img src="public/readme/작성2.png"align="center" width="32%">  <img src="public/readme/지원서.png"align="center" width="32%"></p>

<br />

<br />

## 🚀 핵심 기능 및 FE 기술적 도전

### 1) Route Handlers 적용

- Node.js 서버를 통한 Mock API 구현 및 토큰 관리

### 2) Amazon S3 이미지 변환

- 프론트엔드단에서 File → URL(string타입) 이미지 변환

### 3) Atomic 디자인 패턴 지향

- 도메인 중심의 Page, Layout, Containers, Component 단위로 구성해 로직과 UI 분리
- common 폴더로 팀원 공통 코드, constants 폴더로 상수 관리

### 4) 게시물 CRUD

- postRequest, getRequest라는 공통 함수를 정의해 로직의 일관성 유지
- intersectionObserver 활용 무한스크롤 구현
- optimistic UI 적용 (좋아요, 북마크)
- 파일 다운로드 기능

### 5) 최적화

- image에 placeholder적용, avif 렌더링, lazyLoading
- 모달 dynamic import 활용으로 페이지 bundle size 축소
- throttling 적용
