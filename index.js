/**
 * https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
 */
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('BOEP93', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
}

const inquirer  = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();
