const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/api', (req, res) => {
  if ('word' in req.query) {
    const word = req.query.word;
    const palindrome = word == [...word].reverse().join('');

    res.status(200).json({
      'ok': true,
      word,
      palindrome,
    });
  } else {
    res.status(422).json({
      'ok': false,
      'status': 422,
      'message': 'Required parameter missing: word',
    });
  }
});

const runtimeOpts = {
  timeoutSeconds: 30,
  memory: '128MB',
}

// Expose Express API as a single Cloud Function:
exports.palindrome = functions.runWith(runtimeOpts).https.onRequest(app);
