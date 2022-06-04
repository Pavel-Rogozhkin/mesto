const presets = [
<<<<<<< HEAD
<<<<<<< HEAD
  ['@babel/preset-env', { // какой пресет использовать
    targets: { // какие версии браузеров поддерживать
=======
  ['@babel/preset-env', {
    targets: {
>>>>>>> feature/classes
=======
  ['@babel/preset-env', { // какой пресет использовать
    targets: { // какие версии браузеров поддерживать
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
<<<<<<< HEAD
<<<<<<< HEAD

    // использовать полифиллы для браузеров из свойства target
    // по умолчанию babel использует поллифиллы библиотеки core-js
    useBuiltIns: "entry"
=======
    useBuiltIns: "entry",
    corejs: "3"
>>>>>>> feature/classes
=======

    // использовать полифиллы для браузеров из свойства target
    // по умолчанию babel использует поллифиллы библиотеки core-js
    useBuiltIns: "entry",
    corejs: "3"
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
  }]
];

module.exports = { presets };