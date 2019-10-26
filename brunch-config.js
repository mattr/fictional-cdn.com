const purgecss = require('@fullhuman/postcss-purgecss')

// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  postcss: {
    processors: [
      require('tailwindcss'),
      purgecss({
        content: ['./**/*.html']
      })
    ],
  },
  // purgecss: {
  //   paths: [
  //     "app/assets/*.html"
  //   ],
  //   extractors: [{
  //     extractor: class {
  //       static extract(content) {
  //         return content.match(/[A-z0-9-:\/]+/g) || [];
  //       }
  //     },
  //     extensions: ['html', 'js']
  //   }]
  // }
};
