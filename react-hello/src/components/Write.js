import { useState } from "react";
/*
react compoment 선언
*/
const Write = () => {
  /*
react 의 state변수 
state변수는 처음 저장된 값이 변화가 되면 자동으로 화면을 reRendering 한다.
state변수는 useState()함수를 사용하여 선언한다
[변수이름,변수의 Setter]
Setter에 의해 변수가 변화가 되면 변수값이 표출되는 부분의 화면이 갱신된다.
*/

  const [title, setTitle] = useState("Korea");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form>
      <input name="title" value={title} onChange={onChange} />
      <div>{title}</div>
    </form>
  );
};

export default Write;
