
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/mean-dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN - A Modern Stack - Development'
    }
  },
  test: {
    db: 'mongodb://localhost/mean-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN - A Modern Stack - Test'
    }
  },
  production: {
    db: 'mongodb://localhost/mean',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN - A Modern Stack - Production'
    }
  }
}
