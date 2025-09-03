// Express JS 코드 작성 

const express = require('express');
const mongoose = require('mongoose');
const PORT = 2000;
const path = require('path');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');
const productsRouter = require('./routes/products.router');
const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());


mongoose.connect(`mongodb+srv://KimByeoungHo:rlaqudgh00!@cluster0.u5h8w36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log('mongodb connected'))
.catch((err) => console.log(err));

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`start: ${req.method} ${req.url}`);
        next();
        const diffTime = Date.now() - start;

        console.log(`end: ${req.method} ${req.baseUrl} ${req.url} ${diffTime}ms`);
});



app.get('/', (req, res, next) => {
    setImmediate(() => { next (new Error('it is an error'))});
    // res.render('index', {
    //     imageTitle: "It is a forest2"
    // })
})


app.use((err, req, res, next) => {
    res.json({ message: err.message });
})

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/products', productsRouter);

// 콘솔 출력
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})


