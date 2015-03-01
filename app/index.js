'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class' + chalk.red('ChromeExtensionSimple') + ' generator!'
    ));

    var prompts = [{
      name: 'extName',
      message: 'What is the name of your extension?',
      default: 'my-extension'
    }, {
      name: 'description',
      message: 'How would you describe your extension?',
      default: 'My Chrome Extension'
    }, {
      name: 'eventPage',
      message: 'Would you like to add an Event Page?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.extName = props.extName;
      this.eventPage = props.eventPage;
      this.description = props.description;
      done();
    }.bind(this));
  },

  scaffold: function () {
    this.mkdir("app");
    this.mkdir("app/img");
    this.mkdir("app/libs");
    this.mkdir("app/scripts");
    this.mkdir("app/styles");
  },

  writing: {
    base: function () {

      // standard files
      this.fs.copy(
        this.templatePath('base/_bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('base/_gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('base/_gruntfile.js'),
        this.destinationPath('gruntfile.js')
      );

      // templated files
      this.fs.copyTpl(
        this.templatePath('base/package.json'),
        this.destinationPath('package.json'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('base/bower.json'),
        this.destinationPath('bower.json'),
        this
      );

    },

    projectfiles: function () {

      // copy manifest template
      this.fs.copyTpl(
        this.templatePath('manifest.json'),
        this.destinationPath('manifest.json'),
        this
      );

      // copy remaining files
      this.fs.copy(
        this.templatePath('app') + '/**/*.*',
        this.destinationPath('app')
      );
      this.fs.copy(
        this.templatePath('tasks') + '/**/*.*',
        this.destinationPath('tasks')
      );

      // copy optional files
      if (this.eventPage) {
        this.fs.copy(
          this.templatePath('optional/eventPage.js'),
          this.destinationPath('app/eventPage.js')
        );
      }
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
