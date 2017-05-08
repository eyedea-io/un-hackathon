module.exports = {
  webpack: (config) => {
    config.devtool = false

    for (const r of config.module.rules) {
      if (r.loader === 'babel-loader') {
        r.options.sourceMaps = 'both'
      }
    }
    
    config.output.filename = '[hash].[name]'

    return config
  }
}