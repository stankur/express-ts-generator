#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const myArgs = process.argv.slice(2);

fs.cpSync(path.resolve(__dirname, "../boilerplate"), myArgs[0], {
	recursive: true,
});
