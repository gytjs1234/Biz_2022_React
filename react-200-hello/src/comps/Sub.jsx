import End from "./End";
import End2 from "./End2";
const Sub = (props) => {
  return (
    <div>
      <h2>나는 Sub Comp 입니다.</h2>
      <div>{props.name}</div>
      <p>-----------------------------</p>
      End.jsx: <End name={props.name} /> <br />
      End2.jsx: <End2 name={props.name} />
    </div>
  );
};
export default Sub;
