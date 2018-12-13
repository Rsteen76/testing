require('dotenv').config()

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Testing this again.',
    to: '+15418298042', // Text this number
    from: '+15415834633' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));