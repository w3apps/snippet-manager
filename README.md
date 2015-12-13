# snippet-manager
- Snippet manager - single page application  

## Installation
- Install Node.js - https://nodejs.org/en/  
- In the root of the project run: `npm install` - this installs all the project dependencies  

## Running the app
- In the root of the project run: `node node_modules/grunt-cli/bin/grunt build` - this creates the distribution files that the app requires  
- In the root of the project run: `node Server.js` - this will start a dummy express server that servers the static files  

## Development
- In the root of the project run: `node node_modules/grunt-cli/bin/grunt watch` - this will watch for any change to the files and build the distribution files on the fly    

## Unit tests
- In the root of the project run: `node node_modules/karma/bin/karma start` - this will run the unit tests on PhantomJS  

## Project info
### Files and Folders structure
- `Server.js` - has the code for the dummy express server that servers the static files (any other server can be used)  
- `grunt`/ - holds all the build tasks in separate files  
- `grunt/aliases.js` - is a good starting point to understand the build pipeline which is separated into `codeQuality` and `prepareFiles`; we only run the `prepareFiles` in development as the `codeQuality` tasks are a bit slow  
- `src/` - this is where the source code resides  
- `src/js` - holds general app stuff like: routes, back-end endpoints, configuration, modules  
- `src/views` - holds the 3 views; each containing a controller and a template  
- `tests/` - holds the tests for the application  
- `node_modules/` - gets created after the `npm install` command is ran and holds all the installed dependencies
- `dist` - gets created after the `grunt build` command is ran and holds the distribution files

### Things to improve
- Add some visual feedback when data is fetched from the server  
- Move all CSS to external files and add that to the build pipeline  
- Add e2e tests  
- Make the app production ready: minify files, reduce the static files requests etc.
