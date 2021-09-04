const { response } = require('express');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
app.use(express.urlencoded({
    extended: true,
}))

var options = {
    swaggerOptions: {
      url: 'http://petstore.swagger.io/v2/swagger.json'
    }
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options), (req, res) => {
    console.log(req.body)
});


//app.get('/about', (req, res) => res.send('About Page Route'));

//app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

//app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));