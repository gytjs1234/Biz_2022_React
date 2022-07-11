const TodoIitem = ({ todo, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{todo.content}</td>
      <td>{todo.t_s_date}</td>
    </tr>
  );
};
export default TodoIitem;
