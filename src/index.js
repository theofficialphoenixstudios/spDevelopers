const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
//Getting the paths
const publicPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../views/templates");
const partialsPath = path.join(__dirname, "../views/partials");

//Setting the view Engine
app.set("views", viewPath);
app.set("view engine", "hbs");

//Setting the public folder and Partials Folder
app.use(express.static(publicPath));
hbs.registerPartials(partialsPath);


app.get('/', (req,res) => {
    res.render('home', {
        title:"S&P Developers"
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title:'S&P Developers'
    })
})

app.get('/contact', (req,res) => {
    res.render('contact', {
        title:'S&P Developers'
    })
})

const port = process.env.PORT || 4012
app.listen(port,() => {
    console.log(`Server running on port : ${port}`)
})