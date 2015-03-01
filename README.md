# Simple Chrome Extension generator

Maintainer: [Stephen Collins](https://github.com/wtfsven)

> Chrome Extension generator that creates everything you need to get started with extension development.
Includes `grunt` tasks for easy generation of debug and release builds.

## Getting Started

- First make a new directory, and `cd` into it: `mkdir my-new-chrome-extension && cd $_`
- Install the generator: `npm install -g generator-chrome-extension-simple`
- Run: `yo chrome-extension-simple`

Need more information about Chrome Extension? Please visit [Google Chrome Extension Develpment](http://developer.chrome.com/extensions/devguide.html)

## Generators

Available generators:

* [chrome-extension-simple](#app) (aka [chrome-extension-simple:app](#app))

### App

Sets up a new Chrome Extension, generating all the boilerplate you need to get started.

```bash
yo chrome-extension-simple
```

## Test Chrome Extension

To test, go to: chrome://extensions, enable Developer mode and load app as an unpacked extension
by selecting the `build` directory within your project.

## Grunt tasks

### Debug

Debug task helps reduce your efforts during development.

```bash
grunt
(or)
grunt debug
```

### Build

By default, generators compress the file that was created by building a js/css/html/resource file. You can distribute the compressed file using the Chrome Developer Dashboard to publish to the Chrome Web Store.

Run this command to build your Chrome Extension project.

```bash
grunt build
```

Grunt will automatically increment your [patch](http://semver.org/) version and create a new
zip file for that version.

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.


## License

MIT