const createFiles = require('./create-files');
const templateColor = process.argv.slice(2)[0] || 'white';
const template = `template-${templateColor}.sketch`;

console.info('Creating files using template', template);

createFiles(template, [
  `Insert your text for images`,
  `It will be used in templates`,
  `Enjoy!`,
]);

