 
module.exports = app => {

  // Base URLS
  app.use('/', require('./api.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/', require('./user-logged.routes'))
  app.use('/', require('./base.routes'))
}
