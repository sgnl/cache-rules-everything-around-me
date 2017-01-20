
const express = require('express');

const { client } = require('../lib/cream');
const sleep = require('../services/sleep');

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    return sleep(5000)
      .then(_ => res.render('api/index', (err, html) => {
        console.log('req.originalUrl: ', req.originalUrl);
        client.set(req.originalUrl, html);
        res.send(html);
        client.getAsync(req.originalUrl)
          .then(urls => console.info(urls))
      }));
  });

module.exports = router;
