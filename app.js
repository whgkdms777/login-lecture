
//모듈
const express = require("express"); //express를 사용하여 서버 띄우기
const app = express();

const PORT = 3000;


//라우팅
const home = require("./routes/home"); 

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/",home); // use - 미들웨어를 등록해주는 메서드.

module.exports = app;
