module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@default_img': './src/assets/images/default_img',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@components': './src/components',
          '@config': './src/config',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
