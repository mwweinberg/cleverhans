const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

//endpoint for post requests
app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: 'success',
        number1: request.body.num1,
        number2: request.body.num2

    });
});