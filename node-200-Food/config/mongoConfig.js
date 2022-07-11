const USERNAME = "hyosun";
const PASSWORD = "dnal5180";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.df79j.mongodb.net/?retryWrites=true&w=majority`;

/*
mongoose 도구를 사용하여
NoSQL 인 mongoDB 에 DMBS Schema 방식으로 접근하기

*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_date: String,
  f_name: String,
  f_intake: String,
  f_calorie: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
