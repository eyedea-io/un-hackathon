const ENV = {
  devel: 'STAGING',
  master: 'PRODUCTION'
}[process.env.CIRCLE_BRANCH || 'devel']

const envVars = [
  'SYNCANO_INSTANCE_NAME'
]

const variables = envVars
  .reduce((env, key) => {
    const name = ENV ? `${ENV}_${key}` : key
    const value = process.env[name] || process.env[key]

    return Object.assign({}, env, {
      [`process.env.${key}`]: value
    })
  }, {})

module.exports = variables
