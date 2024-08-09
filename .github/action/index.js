const core = require('@actions/core');

try {
  // Get input from action.yml
  const name = core.getInput('name');
  
  // Print greeting message
  console.log(`Hello, ${name}!`);

  // Set output
  core.setOutput('greeting', `Hello, ${name}!`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`);
}
