# ngstarter-bootswatch-tasks
Extends Angular 2 Starter with Bootswatch specific tasks

[![npm version](https://badge.fury.io/js/ngstarter-bootswatch-tasks.svg)](https://badge.fury.io/js/ngstarter-bootswatch-tasks)

## Getting started
1. Install Bootswatch and the starter extension
  ```bash
  npm install bootswatch ngstarter-bootswatch-tasks --save-dev
  ```

2. Then require it somewhere in your [Angular 2 Starter](https://github.com/antonybudianto/angular2-starter) tasks
  ```js
  require('ngstarter-bootswatch-tasks');
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
