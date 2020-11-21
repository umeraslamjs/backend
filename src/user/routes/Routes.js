const express = require("express");
const routes = express.Router();
const User = require("../models/User");

routes.get("/", async (req, res) => {
  try {
     
    let UserList=await User.find();
    res.status(200).send({data:UserList})
  } catch (error) {
    res.status(401).send(error)
  }

});


routes.delete("/:id", async (req, res) => {
    try {
      let UserList=await User.remove({_id:req.params.id});
      res.status(200).send({data:UserList})
    } catch (error) {
      res.status(401).send(error)
    }
  
  });

  routes.put("/:id", async (req, res) => {
    console.log(req.body);
    try {
        var myquery = req.body;

      let UserList=await User.update({_id:req.params.id},{$set:myquery});
      res.status(200).send({data:UserList})
    } catch (error) {
      res.status(401).send(error)
    }
  
  });


routes.post("/", async (req, res) => {
  try {
    let UserModel = new User({
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    let UserSave = await UserModel.save();
    res.status(200).send({ data: UserSave });
  } catch (err) {
    res.status(401).send({ message: err });
  }
});

module.exports = routes;
