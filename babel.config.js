const presets = [
<<<<<<< HEAD
  ['@babel/preset-env', { // какой пресет использовать
    targets: { // какие версии браузеров поддерживать
=======
  ['@babel/preset-env', {
    targets: {
>>>>>>> feature/classes
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
<<<<<<< HEAD

    // использовать полифиллы для браузеров из свойства target
    // по умолчанию babel использует поллифиллы библиотеки core-js
    useBuiltIns: "entry"
=======
    useBuiltIns: "entry",
    corejs: "3"
>>>>>>> feature/classes
  }]
];

module.exports = { presets };