const express = require('express');
const router=express.Router();
const uuid = require('uuid');

let users = [
    {
      id: uuid.v4(),
      firstName: "Abhinav",
      email: "abhinav@dal.ca",
    },
    {
      id: uuid.v4(),
      firstName: "Sayan",
      email: "sayan@dal.ca",
    },
  ];
  
  router.get("/users", (req, res) => {
    res.status(200).json({
      message: "Users retrieved",
      success: true,
      users: users,
    });
  });
  
  router.post("/add", (req, res) => {
    const { firstName, email } = req.body;
  
    // Check if firstName and email are not null
    if (!firstName || !email) {
      return res.status(400).json({
        message: "Bad Request",
        success: false,
        error: "firstName and email are required fields",
      });
    }
  
    // Generate a new ID
    const id = uuid.v4();
  
    // Add the new user to the array
    users.push({
      id,
      firstName,
      email,
    });
  
    // Return a success response
    res.status(200).json({
      message: "User added successfully",
      success: true,
      data: {
        id,
        firstName,
        email,
      },
    });
  });
  
  // update the user by id
  router.put("/update/:id", (req, res) => {
      const { id } = req.params;
      const { firstName, email } = req.body;
    
      if (!firstName && !email) {
        return res.status(400).json({
          message: "Bad Request: Missing fields to update",
          success: false,
        });
      }
    
      const user = users.find((user) => user.id === id);
    
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
    
      if (firstName) {
        user.firstName = firstName;
      }
    
      if (email) {
        user.email = email;
      }
    
      res.status(200).json({
        message: "User updated",
        success: true,
      });
    });
  
  
  // get by Id
  
  router.get("/user/:id", (req, res) => {
      const { id } = req.params;
      const user = users.find((user) => user.id === id);
    
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
  
      res.status(200).json({
        message: "User retrieved",
        success: true,
        user: user,
      });
    });
  
    module.exports = router;