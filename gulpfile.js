var gulp          = require('gulp');
var server        = require('gulp-server-livereload');
var $             = require('gulp-load-plugins')();
var del           = require('del');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var preprocessify = require('preprocessify');
var runSequence   = require('run-sequence');
var domain        = require('domain');
var sass          = require('gulp-sass')
var scsslint      = require('gulp-scss-lint');
var autoprefixer  = require('gulp-autoprefixer');

var env           = 'dev';

gulp.task('clean:dev', function() {
  return del(['.tmp']);
});

gulp.task('clean:dist', function() {
  return del(['dist']);
});

gulp.task('scripts', function() {
  var filePath = './app/scripts/app.js';
  var extensions = ['.jsx'];

  var bundle = function() {
    return browserify({
      entries: [filePath],
      extensions: extensions,
      debug: env === 'dev'
    }).transform(preprocessify({
      env: env,
    }, {
      includeExtensions: extensions
    })).transform('reactify')
    .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/scripts/bundle'));
  }

  if (env === 'dev') {
    return gulp.src(filePath)
      .pipe($.plumber())
      .pipe($.tap(function(file) {
        var d = domain.create();

        d.on('error', function(err) {
          $.util.log($.util.colors.red('Browserify compile error:'), err.message, '\n\t', $.util.colors.cyan('in file'), file.path);
          $.util.beep();
        });

        d.run(bundle);
      }));
  } else {
    return bundle();
  }
});


gulp.task('imagemin', function() {
  return gulp.src('app/images/*')
    .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function() {
  return gulp.src(['app/*.txt', 'app/*.ico'])
    .pipe(gulp.dest('dist'));
})

gulp.task('sass', function () {
    gulp.src('app/styles/scss/*.scss')
        .pipe($.plumber())
        .pipe(scsslint())
        .pipe(sass({map: false}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('dist/styles/css'));
});

gulp.task('html', function() {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('serve', function() {
  runSequence('clean:dist', ['scripts', 'sass', 'html'], 'webserver');

  gulp.watch('app/*.html');

  gulp.watch('app/scripts/**/*.js', ['scripts']);

  gulp.watch('app/styles/scss/**/*.scss', ['sass']);

  gulp.watch('app/scripts/**/*.jsx', ['scripts']);
});

gulp.task('build', function() {
  env = 'prod';

  runSequence(['clean:dev', 'clean:dist'],
              ['scripts', 'imagemin', 'html'],
              'copy');
});

gulp.task('default', ['serve']);

gulp.task('build', ['build']);
