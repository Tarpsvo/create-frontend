const execa = require('execa');
const path = require('path');

/**
 * Runs the create-frontend generator in the given path.
 */
module.exports = function runGenerator(cwd) {
  return execa(
    'node',
    [
      path.resolve(__dirname, '../../bin/create-frontend.js'),
      '--dev', // Uses local version of create-frontend instead of npm
      '-y', // Skips confirmations
      '--template=react', // This template serves an index.html so it's easier to analyze result
    ],
    { cwd }
  );
};
