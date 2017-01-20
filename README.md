
# DRAFT

# cache rules everything around me

![Dollar, dollar, bills y'all.](http://www.themarq.ca/blog/wp-content/uploads/2016/03/tumblr_n3ybc8N8mN1qm3k5io1_500.gif)

Route: `/api` is very slow (takes 5 seconds to respond)

Solution: implement caching using Redis!

**cache miss flow**
Implement a caching approach so that when the initial GET request to `/api`, it takes 5 seconds as usual with the
exception that the response value will be saved to the cache.

**cache hit flow**
But all subsequent GET requests to `/api` should be served from the cache. This request should be instant, e.g. not take 5 seconds to respond. The cache should expire after 1 minute. After that the first GET request to `/api` will take 5 seconds to respond and the **cache miss** flow will occur

Implementation we're looking for:

A Module we can import anywhere into the code which will check the
cache store has cached data for a route and serves it back (cache hit). Otherwise, the middleware lets the request fall-through.

Module should have:
- a method which returns a function that can be mounted as middleware
- a method to save a key-value pair to the cache
- a method to retrieve a valur from the cache

Bonus:
Is there a way to achieve the goal without the getter and setter methods? (yes, but it might require some spoon-bending)

![Do not try and bend the spoon. That's impossible.](http://i.imgur.com/rGG2wIf.gif)