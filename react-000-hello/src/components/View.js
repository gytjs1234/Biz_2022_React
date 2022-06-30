import React from "react";

/*
부모 컴포넌트에서 전달해준 변수는 props에 받아 {props.변수명}형식으로 
사용할수있다.

props를 통해서 전달받은 변수는 read only이다.
*/
const view = (props) => {
  const { title } = props;
  return (
    <div>
      전달받은 값: {props.title},{title}
    </div>
  );
};

export default view;
