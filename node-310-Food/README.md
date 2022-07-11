# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- MongoDB + NodeJS + Express +MongoDB +React 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 :express-21c node-310-Food 생성
- 프로젝트 폴더에서 npm install

## React Frontend Client를 생성하기 위하여

- node-310-Food 폴더에서 React Client 생성
- client 폴더에서 터미널열기
- yarn 실행하여 update
- yarn build 실행하여 build 생성하기
- node-310-Food/client/build 폴더 생성확인

## nodeJs 에서 client 인식시키기

- nodejs-310-Foold.app.js열기
- app.use(express.static(path.join('./clinet/build'))); 변경하기
- app.use('/', indexRouter); 주석처리
- nodejs-310-Food 폴더에서 서버 Start :nodemon 실행하기
- web browser 에서 localhost:3000 주소 입력하여 React화면 출력확인

## React 프로젝트 파일 이름 변경

- App._ 으로 시작되는 파일을 모두 ReactrJS._ 로 변경

## MongoDB 연동하기

- mongoose dependency 설치 : npm install mongoose
- 날짜와 시간 도구 설치 : npm install moment

* UUID Key 생성 도구 설치 :npm install react-uuid

# React 에서 외부 파일 연결하기

- html 에서는 css,js등을 link href 등을 사용하여 연결한다
- React public 폴더에 있는 index.html 파일에 css,js 등을 연결할수 있지만 React 에서는
  권장하지 않는다.
- React 에서는 특히 css 파일을 src 폴더에 저장하고, index.js 또는 App.js
  (ReactJS.js) 파일에서 import 하여 사용하는 것을 권장한다.
- React 프로젝트를 yarn build하면 css,js 파일들을 Transfileing 하여 build 폴더에 저장하는데 ,대부분의 파일을 압축, 난독화 하여 저장한다.
- 압축된 css,js 파일은 client 로 전송될때 용량이 상대적으로 작아져서 네트워크에 전송된다
- public 폴더에 저장되거나 연결된 파일도 압축이 되긴 하지만 css,script등을 외부 연결을 통해
  사용하면 압축이 되지않아 네트워크에 노출되는 현상이 발생한다.
