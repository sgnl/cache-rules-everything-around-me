const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

const cache = (req, res, next) => {
  client.getAsync(req.originalUrl)
    .then(html => {
      if (!html) {
        return next('route');
      }

      res.send(html);
    });
};

module.exports = { client, cache };