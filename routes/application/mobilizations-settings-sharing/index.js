// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

const RoutesMobilizations = store => ({
  path: 'mobilizations/:mobilization_id/sharing',
  getComponent (nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./page.connected').default)
    })
  }
})

export default RoutesMobilizations
