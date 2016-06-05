var gulp = require('gulp');
var fs = require('fs');
var argv = require('yargs').argv;
var config = require('../../../gulp.config')();
var replace = require('gulp-replace');

gulp.task('set-theme', function () {
    var theme = argv.name;
    if (!theme) {
      console.log('ERROR: set-theme needs name argument like --name=paper');
    } else {
      var p = 'node_modules/bootswatch/';
      try {
        if (fs.statSync(p + theme).isDirectory()) {
          if (fs.statSync(p + theme + '/_bootswatch.scss')){
            return gulp.src(config.assetsPath.styles + 'bootstrap.scss')
                .pipe(replace(/bootswatch\/[^\/]+\//g, 'bootswatch/'+ theme + '/'))
                .pipe(gulp.dest(config.assetsPath.styles));
          }
        }
      } catch (err) {
        console.log('ERROR: theme "' + theme + '" is not found');
      }
    }
    process.exit(1);
});