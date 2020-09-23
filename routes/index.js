 
module.exports = app => {

  // Base URLS
  app.use('/', require('./edituser.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/', require('./profiles.routes'))
  app.use('/', require('./dashboard.routes'))
  app.use('/', require('./base.routes'))
  app.use('/', require('./projects.routes'))
}
