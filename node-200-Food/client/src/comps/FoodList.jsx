const foodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    return (
      <tr>
        <td>{food.f_date}</td>
        <td>{food.f_name}</td>
        <td>{food.f_intake}</td>
        <td>{food.f_calorie}k</td>
        <td>{food.f_intake * food.f_calorie}k</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <th>날짜</th>
        <th>식품명</th>
        <th>섭취량</th>
        <th>칼로리</th>
        <th>총 칼로리</th>
      </thead>
      <tbody>{foodBody}</tbody>
    </table>
  );
};
export default foodList;
