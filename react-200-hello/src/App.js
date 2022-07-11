import "./App.css";
import Main from "./comps/Main";

/*
React에서 JS파일, JSX(JavaScript Extands)
*/

//JSX에서 사용하는 Component type변수
const h1 = <h1>대한민국만세</h1>;
const div = <div>{h1}</div>;
const header = <header className="App-header"></header>;
const appDiv = (
  <div className="App">
    {header}
    {div}
    <Main />
  </div>
);

//함수형 컴포넌트 App이라는 이름의 Component type의 함수 선언
function App() {
  return appDiv;
}

//다른 Component 에서 App Component를 import 하여 조립할수 있도록
//내보낸는것
export default App;
