module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/library',
      {
        name: 'luna-crypto-lib',
        target: 'node',
        libraryTarget: 'commonjs2',
        babel: {
          presets: [
            ['babel-preset-env', {
              targets: {
                node: '10.0'
              }
            }]
          ],
          'plugins': ['dynamic-import-node']
        }
      }
    ],
    '@neutrinojs/mocha'
  ]
};
