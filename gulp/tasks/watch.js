const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()

gulp.task('watch', ['browser-sync'], function () {
  watch('./app/index.html', function () {
    browserSync.reload()
  })
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject')
  })
  // watch('./app/**/*.*').on('change', browserSync.reload)
})

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false,
    browser: 'C:\\Program Files\\Firefox Developer Edition\\firefox.exe',

    server: {
      baseDir: './app'
    }
  })
})

gulp.task('cssInject', ['styles'], function () {
  gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream())
})
