# OPL

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Update the project
ng update

# add and commit files
git add *

#create service
ng generate service



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run as secure site
`ng serve --port 4500 --ssl --ssl-key cert/localhost.key  --ssl-cert cert/localhost.crt --open`

## Backend for the application is here:
GitHub: https://github.com/mraswan/opl_microservice.git
API Documentation: https://localhost:5000/opl/doc/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


from package.json
//    "@angular/forms": "~9.1.0",

//
"@angular/platform-browser": "~9.1.0",
"@angular/platform-browser-dynamic": "~9.1.0",
"@angular/router": "~9.1.0",

** Executing migrations of package '@angular/cli' **

❯ Update Browserslist configuration file name to '.browserslistrc' from deprecated 'browserslist'.
RENAME browserslist => .browserslistrc
  Migration completed.

❯ Update tslint to version 6 and adjust rules to maintain existing behavior.
UPDATE package.json (1311 bytes)
UPDATE tslint.json (2976 bytes)
  Migration completed.

❯ Remove deprecated 'es5BrowserSupport' browser builder option.
  The inclusion for ES5 polyfills will be determined from the browsers listed in the browserslist configuration.
UPDATE angular.json (3931 bytes)
  Migration completed.

❯ Replace deprecated and removed 'styleext' and 'spec' Angular schematic options with 'style' and 'skipTests', respectively.
  Migration completed.

❯ Remove deprecated options from 'angular.json' that are no longer present in v10.
  Migration completed.

❯ Add "Solution Style" TypeScript configuration file support.
  This improves developer experience using editors powered by TypeScript’s language server.
  Read more about this here: https://v10.angular.io/guide/migration-solution-style-tsconfig
RENAME tsconfig.json => tsconfig.base.json
CREATE tsconfig.json (488 bytes)
UPDATE src/tsconfig.app.json (209 bytes)
UPDATE src/tsconfig.spec.json (261 bytes)
  Migration completed.

❯ Add the tslint deprecation rule to tslint JSON configuration files.
  Migration completed.

❯ Update library projects to use tslib version 2 as a direct dependency.
  Read more about this here: https://v10.angular.io/guide/migration-update-libraries-tslib
  Migration completed.

❯ Update 'module' and 'target' TypeScript compiler options.
  Read more about this here: https://v10.angular.io/guide/migration-update-module-and-target-compiler-options
  Migration completed.

❯ Update workspace dependencies to match a new v10 project.
UPDATE package.json (1310 bytes)
✔ Packages installed successfully.
  Migration completed.

** Executing migrations of package '@angular/core' **

❯ Missing @Injectable and incomplete provider definition migration.
  As of Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

❯ ModuleWithProviders migration.
  As of Angular 10, the ModuleWithProviders type requires a generic.
  This migration adds the generic where it is missing.
  Read more about this here: https://v10.angular.io/guide/migration-module-with-providers
  Migration completed.

❯ Undecorated classes with Angular features migration.
  In version 10, classes that use Angular features and do not have an Angular decorator are no longer supported.
  Read more about this here: https://v10.angular.io/guide/migration-undecorated-classes
  Migration completed.


  <!--
  You may use the padding and margin shorthand Bootstrap 4 classes as follows:

  For extra small devices i.e. xs

  {property}{sides}-{size}
  For other devices/viewports (small, medium, large and extra large)

  {property}{sides}-{breakpoint}-{size}
  Where:

  property = m for margin and p for padding
  Following are sides shorthand meanings:

  l = defines the left-margin or left-padding
  r = defines the right-margin or right-padding
  t = defines the top-margin or top-padding
  b = defines the bottom-margin or right-padding
  x = For setting left and right padding and margins by the single call
  y = For setting top and bottom margins
  blank = margin and padding for all sides
  The breakpoint = sm, md, lg, and xl.

  Combining all the above, the left padding complete code can be (for example):

  For left padding in extra small devices

  pl-2

  or for medium to extra large

  pl-md-2 -->
