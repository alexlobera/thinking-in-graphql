'use-strict'

const conf = {
  port: 8888,
  db: {
    url: 'mongodb://localhost/leanjs-academy',
    options: {
      server: {
        socketOptions: {
          auto_reconnect: true,
          keepAlive: 1,
          connectTimeoutMS: 30000
        }
      },
      replset: {
        socketOptions: {
          auto_reconnect: true,
          keepAlive: 1,
          connectTimeoutMS: 30000
        }
      }
    }
  }
}

module.exports = conf
