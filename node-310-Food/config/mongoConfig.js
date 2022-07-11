const PASSWORD = "dnal5180";
const mongoURL = `mongodb+srv://hyosun:${PASSWORD}@cluster0.df79j.mongodb.net/?retryWrites=true&w=majority`;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const foodSchema = Schema({
  d_id: String,
  d_date: String,
  d_food: String,
  d_qty: Number,
  d_cal: Number,
});
const food_model = mongoose.model("food", foodSchema);

export { mongoURL, food_model };
