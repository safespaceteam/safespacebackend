require('dotenv').config();
const express = require('express');
const db = require("../data/dbConfig.js");
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTHTOKEN;
const twilioPhone = process.env.TWILIO_PHONE;
const myPhone = process.env.MY_PHONE;
const client = require('twilio')(accountSid, authToken);

const router = express.Router();

router.post('/send', (req, res) => {
    client.messages
      .create({from: twilioPhone, body: 'body', to: myPhone})
      .then(message => console.log(message.sid));
})




module.exports = router;