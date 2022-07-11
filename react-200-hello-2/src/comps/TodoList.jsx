import TodoIitem from "./TodoItem";
const TodoList = (props) => {
  const { todoList } = props;

  //todoList 배열을 map(forEach)을 반복문으로 반복하면서
  //각각의 요소를 TodoItem 에 item 변수에 담아 보내고
  //생성된 TodoItem 요소들을 모아서
  //_tempTodoList를 생성하기
  const _temptTodoList = todoList.map((todo, index) => {
    const todo_td = <TodoIitem todo={todo} index={index} />;
    return todo_td;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <td>번호</td>
          <td>리스트</td>
          <td>시각</td>
        </tr>
      </thead>
      <tbody>{_temptTodoList}</tbody>
    </table>
  );
};
export default TodoList;
