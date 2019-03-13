require('dotenv').config();
const express = require('express');
const db = require("../data/dbConfig.js");
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTHTOKEN;
const twilioPhone = process.env.TWILIO_PHONE;
const myPhone = process.env.MY_PHONE;
const client = require('twilio')(accountSid, authToken);

const router = express.Router();

const errorHandler = (res, code, message, error) => {
    return res.status(code).json({ message, error });
  };



router.post('/send', (req, res) => {
    const id = req.body.id;
  
    db('messages')
      .where({ id })
      .then(message => {

        if (message) {
            console.log(message[0].message);
                client.messages
                .create({
                    from: twilioPhone, 
                    body: `Here is something cool about yourself: ${message[0].message}`, 
                    to: myPhone
                })
                .then(message => console.log(message.sid));
                res.status(200).json(message);
        } else {
          res.status(400).json({
            message: 'Could not find the message you are looking for.'
          });
        }
      })
      .catch(error => {
        errorHandler(res, 500, 'There was an error sending the message.', error);
      });
  });




module.exports = router;