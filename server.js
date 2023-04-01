import express from 'express';


const app = express();

app.get('/', (req, res) => res.send('API Running'))

app.listen(8000, () => {
    console.log("Server Running 😉")
})