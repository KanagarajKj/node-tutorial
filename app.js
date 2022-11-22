const express = require("express");
const app = express();

// app.use(express.static("./public"));
app.use(express.urlencoded( {extended:false}))

app.get('/', (req,res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.post("/addusers",(req,res) => {
    console.log(req.body)
    const {fullName} = req.body;
    const { email } = req.body;
    const { userid } = req.body;
    res
      .status(200)
      .send(
        `<h1>Welcome ${fullName}</h1> <p>Mail Id: ${email}</p> <p>User Id: ${userid}</p>`
      );
})

app.listen(5000, () => {
    console.log('App running in http://localhost:5000');
})
