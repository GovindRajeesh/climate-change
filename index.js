global.DIR = __dirname

var express = require("express")
var impactsRouter = require("./routers/impacts")
var causesRouter = require("./routers/causes")
var engine = require("express-handlebars").engine

var app = express()
app.engine('hbs', engine({
    extname: ".hbs",
    defaultLayout: false,
    layoutsDir: __dirname + "/views/templates"
}));
app.set('view engine', 'hbs');
app.set('views', './views/templates');

app.use("/styles", express.static("styles"))
app.use("/scripts", express.static("scripts"))
app.use("/assets", express.static("assets"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.use("/impacts", impactsRouter)
app.use("/causes", causesRouter)

app.listen(process.env.PORT || 3000, "0.0.0.0",()=>{})