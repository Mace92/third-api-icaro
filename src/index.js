const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const port = 3000;

const producto = {
    id: 1,
    nombre: 'Coca Cola',
    precio: 100,
    stock: 100,
};

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/vistas/bienvenido'), { producto });
});

app.listen(port, () => {
    console.log(`App escuchando http://localhost:${port}`)
}
)