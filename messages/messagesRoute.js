const express = require("express");

const router = express.Router();
const db = require("../data/dbConfig.js");


const Messages = require('./messagesModel.js');

const errorHandler = (res, code, message, error) => {
    return res.status(code).json({ message, error });
  };


// GET :ID
router.get('/messages/:id', (req, res) => {
    const id = req.params.id;
  
    db('messages')
      .where({ id })
      .first()
      .then(message => {
        if (message) {
          db('users')
            .where({ id })
            .then(user => {
              res.status(200).json(message);
            });
        } else {
          res.status(400).json({
            message: 'Could not find the message you are looking for.',
            error
          });
        }
      })
      .catch(error => {
        errorHandler(res, 500, 'There was an error getting the message.', error);
      });
  });

// POST
router.post('/messages', (req, res) => {
    const newMessage = req.body;
  
    db('messages')
      .insert(newMessage)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        errorHandler(res, 500, 'There was an error adding the message.', error);
      });
  });


module.exports = router;