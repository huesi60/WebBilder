var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('img', function () {
  return gulp.src('src/*.jpg')
    .pipe($.responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.jpg': [{
        width: 300,
        rename: { suffix: '-300' },
      }, {
        width: 380,
        rename: { suffix: '-380' },
      }, {
        width: 620,
        rename: { suffix: '-620' },
      }, {
        width: 700,
        rename: { suffix: '-700' },
      }, {
        width: 920,
        rename: { suffix: '-920' },
      }, {
        width: 1240,
        rename: { suffix: '-1240' },
      }, {
        width: 1400,
        rename: { suffix: '-1400' },
      }],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 74,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/img'));
});
