# angular-mopa

This is an Javascript/[`AngularJS`](https://angularjs.org/) client for "MOPA" API

Building the source code requires [`NodeJs`](http://nodejs.org/), [`npm`](https://www.npmjs.com/), [`bower`](http://bower.io/) and [`grunt`](http://gruntjs.com/) as dependancies 

To use the source code for development install the system wide dependencies then 

1. Get the source code, Example using `git clone https://github.com/WorldBank-Transport/angular-mopa.git`

2. Move to project directory, `cd angular-mopa`

3. Install javascript dependencies by running  `npm install` and then `bower install`

4. You are good to go

To start the development server run

    grunt serve

To build the source code for deployment run

    grunt
 
This will build the source code into a folder named `dist` within your project root. The content of the `dist` folder can be server using your favorite web server as a simple static content.

If you getting errors when building try install some build dependancies by running:

    npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev

Running `grunt test` will run the unit tests with karma.

This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.
