import express from "express";
import { food_model } from "../config/mongoConfig.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const query = req.query.name;
  //   res.send("나에게 전달된 값 : " + query);
  res.json({ name: query });
});

// localhost:3000/bucket 주소로 POST 데이터가 전송되어 오면
router.post("/insert", (req, res) => {
  console.log(req.body);
  const body = req.body;
  console.table(body);

  food_model.create(body).then(() => res.send("OK"));
});

router.get("/list", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

export default router;
