const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/api/:word', (req, res) => {
  const word = req.params.word;
  const palindrome = word == [...word].reverse().join('')

  res.status(200).json({ word, palindrome });
});

// Expose Express API as a single Cloud Function:
exports.palindrome = functions.https.onRequest(app);
