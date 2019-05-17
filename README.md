# Products - WIRECARD
Products WIRECARD for Wirewiki (Documentation) - Wirefeed (Feed)- Wireguide (Guidelines).

This project forked from [rishipr/mern-auth](https://github.com/rishipr/mern-auth)

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

For `DEV` use `config/keys-dev.js`.
```javascript
module.exports = {
  mongoURI: "mongodb://localhost:27017/products-dev",
  secretOrKey: "secret"
};
```
For `PROD` use `config/keys.js`.
```javascript
module.exports = {
  mongoURI: "mongodb+srv://<USER>:<PASSWORD>@products-ugme3.gcp.mongodb.net/xxxxx?retryWrites=true",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000

// If Server already runs or stuck on http://localhost:5000 and client on http://localhost:3000
pkill node
```

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.
