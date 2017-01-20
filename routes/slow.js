
const express = require('express');

const { client } = require('../lib/cream');
const sleep = require('../services/sleep');

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    return sleep(5000)
      .then(_ => res.render('api/index', (err, html) => {
        res.setCache(req.originalUrl, html);
        res.send(html);
      }))
  });

module.exports = router;
