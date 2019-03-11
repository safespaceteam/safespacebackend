require('dotenv').config();

const express = require("express");

const router = express.Router();
const db = require("../data/dbConfig.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require('./authModel.js');

const secret = process.env.JWT_SECRET 

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secret, options);
}



router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 15);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
          res
            .status(200)
            .json({ message: `Welcome ${user.name}!`, token });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });




  

  function restricted(req, res, next) {
    const token = req.headers.authorization;
    
    if(token) {
      jwt.verify(token, secret, (err, decodedToken) => {
          if(err){
              res.status(401).json({message: 'please login or sign up to view'})
          } else {
              req.decodedJwt = decodedToken;
              next();
          }
      });
    } else {
        res.status(401).json({ message: 'please login or sign up to view'})
    }
  }


router.get('/messages',restricted, (req, res) => {
  db('messages').select('id', 'message')
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      errorHandler(res, 500, 'There was an error getting the projects.', error);
    });
});


  module.exports = router;