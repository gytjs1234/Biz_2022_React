const End2 = ({ name }) => {
  //현재 comp 에서만 사용할수 있도록 private Style 을 지정하고
  //tag comp에 style을 사용하여 지정한다. 단 style 의 속성 이름은 Kebab-case(font-style)
  //를 사용할수 있고 마이너스 기호를 제거하고 Camel-case 로 사용해야한다
  //속성 값들은 반드시 문자열로 만들어야한다.
  const h1Style = {
    color: "blue",
    fontStyle: "italic",
  };
  const style = { display: "inline-block" };
  /*
  jsx 의 tag 규칙
  여러 tag들을 사용할때는 만드시 가장 바깥쪽을 감싸는 groupt tag가 있어야한다
  <div></div>
  <div></div>
  <div></div>
  <p></p>

  <>
  <div></div>
  <div></div>
  <div></div>
  <p></p>
  </>
  */
  return (
    <>
      <h1 style={style}>내가 받은 name={name}</h1>
    </>
  );
};
export default End2;
