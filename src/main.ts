import * as express from 'express'

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World! New World');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});