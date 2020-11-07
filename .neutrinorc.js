const library = require('@neutrinojs/library')

module.exports = {
  use: [
    library({
      name: 'Crypto',
      target: 'node',
      targets: {
        node: '12'
      },
    }),
    (neutrino) => {
      if (process.env.NODE_ENV === 'production') {
        neutrino.config.optimization
          .minimizer('terser')
          .use(require.resolve('terser-webpack-plugin'), [{
            sourceMap: false,
            terserOptions: {
              compress: { drop_console: true }
            }
          }])
      }
    }
  ]
}
