MODULES : library : ES6

index.html : main page
main.js/index.js : main execution file


rest of ur code
classes/library

folder
    index.html
    main.js
    math-lib.js


one single executable : compiler : package/build
bin
exe
jar

webpack : lib : module bundling
runtime : node js

NODE JS
1. runtime environment
2. dependency management

package.json : node config file
1. what are the library your application uses
2. how your application will build, run, compile or do any of the tasks/activities

node : server side apps
npm : client side apps/dependency management : node package manager

npm init : create a package.json file

npm install : downloading library

npm install library-name --flags

--flags 

global/system level installation
--global/-g : CLI : command line tools

local/application level installation
--save/-S :(default) : dependency : lib which is required both in dev stage & prod stage : compiler
--save-dev/-D : dev dependency : lib which is required only in dev stage : debugging, testing

npm install webpack
npm install webpack-cli -D

node_modules : library is downloaded & kept
package-lock.json : log file, keeps a track of which library was downloaded from where

gulp & grunt 
webpack
parcel

HMR : hot module replacement