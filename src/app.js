const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// view 경로 설정
// app.set('views', __dirname.replace('src/','') + '/');
app.set('views', __dirname + '/');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
});

app.get('/dashboard', (req, res) => {
    res.render('../pages/dashboard.html')
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});