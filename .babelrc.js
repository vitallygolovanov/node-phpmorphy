module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: true },
        useBuiltIns: false,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: { version: 3, proposals: true },
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: {
          '~cwd': './',
          '~': './src',
        },
      },
    ],
  ],
};
