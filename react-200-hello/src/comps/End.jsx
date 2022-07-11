function End(props) {
  //props에서 name 변수를 분해라여 선언하기
  const { name } = props;
  const style = { display: "inline-block" };
  return (
    <>
      <h3 style={style}>Sub 에서 받은 name={name}</h3>
    </>
  );
}
export default End;
