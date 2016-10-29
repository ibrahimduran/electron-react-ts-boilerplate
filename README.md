# Electron Boilerplate [![npm version](https://badge.fury.io/js/electron-react-ts-boilerplate.svg)](https://badge.fury.io/js/electron-react-ts-boilerplate) [![David](https://img.shields.io/david/strongloop/express.svg)](https://david-dm.org/ibrahimduran/electron-react-ts-boilerplate) [![David](https://img.shields.io/david/dev/ibrahimduran/electron-react-ts-boilerplate.svg)](https://david-dm.org/ibrahimduran/electron-react-ts-boilerplate?type=dev)
Boilerplate for developing Electron apps using TypeScript2.0 and ReactJS.

## Usage

1. Clone this repository and cd:

	```bash
	$ git clone https://github.com/ibrahimduran/electron-react-ts-boilerplate.git
	```

2. Go to repository folder:

	```bash
	$ cd electron-react-ts-boilerplate
	```

3. Install dependencies:

	```bash
	$ npm install
	```

4. Build demo app:

	```bash
	$ gulp
	```

5. Run demo app:

	```bash
	$ npm start
	```
  or
  ```bash
  $ electron .
  ```

## Structure

```
├── app/
│   ├── components/
│   ├── images/
│   ├── styles/
│   └── app.tsx
├── devtools/
│   └── react/
├── .gitignore
├── gulpfile.js
├── package.json
├── tsconfig.json
├── index.pug
└── main.ts

```

#### [app/](https://github.com/ibrahimduran/electron-react-ts-boilerplate/tree/master/app)

Contains ReactJS application.

#### dist/

Output directory for build process.

#### [devtools/](https://github.com/ibrahimduran/electron-react-ts-boilerplate/tree/master/devtools)

Contains 3th party extensions for development. 

#### [tsconfig.json](https://github.com/ibrahimduran/electron-react-ts-boilerplate/blob/master/tsconfig.json)

Configuration file for TypeScript project.

#### [index.pug](https://github.com/ibrahimduran/electron-react-ts-boilerplate/blob/master/index.pug)

Frontend entry point of application.

#### [main.ts](https://github.com/ibrahimduran/electron-react-ts-boilerplate/blob/master/main.ts)

Backend entry point of application.

## License

[MIT License](https://github.com/ibrahimduran/electron-react-ts-boilerplate/blob/master/LICENSE.md)
