
# DRAFT

# Cache Rules Everything Around Me

![Dollar, dollar, bills y'all.](http://www.themarq.ca/blog/wp-content/uploads/2016/03/tumblr_n3ybc8N8mN1qm3k5io1_500.gif)

Route: `/slow` is very slow (takes 5 seconds to respond)

Solution: implement caching using Redis!

## Cache Miss flow
Implement a caching approach so that when the initial GET request to `/api`, it takes 5 seconds as usual with the
exception that the response value will be saved to the cache.

## Cache Hit flow
But all subsequent GET requests to `/api` should be served from the cache. This request should be instant, e.g. not take 5 seconds to respond. The cache should expire after 1 minute. After that the first GET request to `/api` will take 5 seconds to respond and the **cache miss** flow will occur

## Implementation

A Express middleware module that can be imported onto any route on our server. The middleware function will check the
cache store for the cached data for a route and serves the data in the cache back (cache hit) to the client. Otherwise, if the data has not been cached, the middleware lets the request fall-through and hit the route.

Module should have:
- a method which returns a function that can be mounted as middleware
- a method to save a key-value pair to the cache
- a method to retrieve a value from the cache

## Testing
How does a non-cached request differ from a request served from cache? This is your baseline for your test specifications.

- request assertions with (supertest)[https://github.com/visionmedia/supertest]
- test runner: (mocha)[https://github.com/mochajs/mocha]

## Final Boss
Is there a way to achieve the goal without the getter and setter methods? Yes, but it might require some spoon-bending. After this step you will have built a caching middlware with base similarity to other popular express middlware modules. \o/ :sparkles:

Hint: "fall-through middlware"

![Do not try and bend the spoon. That's impossible.](http://i.imgur.com/rGG2wIf.gif)
