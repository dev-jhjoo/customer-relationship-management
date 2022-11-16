const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// view 경로 설정
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/');
app.use('static', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index.html')
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});