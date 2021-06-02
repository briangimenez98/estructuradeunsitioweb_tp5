const express = require ('express');
const app = express();
const port = 3030
const path = require('path');

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
})
app.listen(3030, ()=> {
    console.log("Puerto 3030 funcionando");
});
app.use(express.static('public'));