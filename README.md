# bootswatch-extension
Extends Angular 2 Starter with Bootswatch specific tasks

[![npm version](https://badge.fury.io/js/%40ngstarter%2Fbootswatch-extension.svg)](https://badge.fury.io/js/%40ngstarter%2Fbootswatch-extension)

## Getting started
1. Install Bootswatch and the starter extension
  ```bash
  npm install bootswatch @ngstarter/bootswatch-extension --save-dev
  ```

2. Then require it somewhere in your [Angular 2 Starter](https://github.com/antonybudianto/angular2-starter) tasks
  ```js
  require('@ngstarter/bootswatch-extension');
  ```

3. Change your starter `bootstrap.scss` to something like
  ```scss
  @import '../../../node_modules/bootswatch/paper/variables';
  @import 'bootstrap.variables';
  @import '../../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
  @import '../../../node_modules/bootswatch/paper/bootswatch';
  ```

4. Try it out, it's ready!
  ```bash
  gulp set-theme --name=darkly
  ```

## Credits
[Bootswatch](https://bootswatch.com/) for providing nice themes!

## License
MIT
