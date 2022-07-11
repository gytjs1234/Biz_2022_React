import { useState, useEffect } from "react";
import FoodList from "./FoodList";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchfoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonBuck = await response.json();
    setFoodList(jsonBuck);
  };

  useEffect(() => {
    fetchfoodList();
  }, []);

  const onkeyDown = (e) => {
    const date = document.querySelector("input[name='f_date']");
    const name = document.querySelector("input[name='f_name']");
    const intake = document.querySelector("input[name='f_intake']");
    const calorie = document.querySelector("input[name='f_calorie']");

    const foodData = {
      f_date: date.value,
      f_name: name.value,
      f_intake: intake.value,
      f_calorie: calorie.value,
    };

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    };
    fetch("http://localhost:3000/food/insert", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchfoodList();
        }
      });
  };

  return (
    <>
      <FoodList foodList={foodList} />
      <input name="f_date" placeholder="날짜" />
      <input name="f_name" placeholder="식품명" />
      <input name="f_intake" placeholder="섭취량" />
      <input name="f_calorie" placeholder="칼로리" />
      <button onClick={onkeyDown}>섭취정보 등록</button>
    </>
  );
};

export default FoodInput;
