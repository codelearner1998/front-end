const express = require("express");
const Collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const email = req.body.email1;


  try {
    const check = await Collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("error not exist user ");
  }
});

app.post("/signup", async (req, res) => {
  //creating database

  const email = req.body.email1;
  const pass = req.body.password1;


  try {
    const check = await Collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      const data = new Collection({
        email: email,
        password: pass
      });
    
      data.save().then(() => {
        console.log("meow");
      });
    //   await Collection.insertMany[data]
    }
  } catch (e) {
    res.json("error not exist user ");
  }
});

app.listen(8000, () => {
  console.log("Server is started on port 8000");
});
