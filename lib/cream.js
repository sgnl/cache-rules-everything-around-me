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
        console.info('cache miss');

        res.setCache = (url, value) => {
          client.set(url, value);
        };

        return next('route');
      }
      console.info('cache hit');
      return res.send(html);
    });
};

module.exports = { client, cache };