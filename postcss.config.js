module.exports = {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 2 versions'],
        remove: false,
        replace: {
          'color-adjust': 'print-color-adjust'
        }
      }
    }
  };
  