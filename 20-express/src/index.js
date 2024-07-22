import express from 'express';


/*Create express app*/
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.listen(3000);
console.log(`Server on port ${3000}`);