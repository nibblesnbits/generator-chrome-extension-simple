'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var tempdir = path.join(os.tmpdir(), './temp-test');

describe('generator', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(tempdir)
      .withOptions({ 'skip-install': true })
      .withPrompt({
        extName: 'test-extension',
        eventPage: true,
        popup: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.bowerrc',
      '.gitignore',
      'bower.json',
      'gruntfile.js',
      'package.json',
      'app/img/icon_16.png',
      'app/img/icon_32.png',
      'app/img/icon_48.png',
      'app/img/icon_64.png',
      'app/img/icon_128.png',
      'app/libs/js/jquery.min.js',
      'app/manifest.json',
      'app/scripts/main.js',
      'app/styles/main.less',
      'app/styles/vars.less',
      'tasks/build.js',
      'tasks/debug.js',
      'tasks/options/clean.js',
      'tasks/options/compress.js',
      'tasks/options/copy.js',
      'tasks/options/less.js',
      'tasks/options/setMinContentScripts.js',
      'tasks/options/uglify.js',
      'tasks/options/updateDependencies.js',
      'tasks/options/updatePackage.js',
      'tasks/options/watch.js',

      // optional files
      'app/popup.html',
      'app/scripts/eventPage.js',
      'app/scripts/popup.js'
    ]);
  });
});
