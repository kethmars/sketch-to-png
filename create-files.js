const ns = require('node-sketch');
const slugify = require('slugify');

const { exportImage, removeFile } = require('./helpers');

const PAGE_NAME = 'Page 1';
const ARTBOARD_NAME = 'instagram';
const TEXT_LAYER_NAME = 'main-text';
const FOLDER = 'png';

async function generateImageWithText(template, text, index) {
  console.log('Starting generation');
  
  const filename = slugify(text).replace(`'`, '-', text);
  const sketchFile = await ns.read(`${process.cwd()}/${template}`);

  const page = sketchFile.pages.find(p => p.name === PAGE_NAME);
  const artBoard = page.layers.find(l => l.name === ARTBOARD_NAME && l._class === 'artboard');
  const textGroup = artBoard.layers.find(l => l.name === TEXT_LAYER_NAME && l._class === 'group');
  const textObject = textGroup.layers[0];
  
  const artboardName = `${index}_${filename}`;
  const savedFileName = `${artboardName}.sketch`;

  // Change artboard name. Will be used as the png name.
  artBoard.name = artboardName;
  textObject.attributedString.string = text || '';

  await sketchFile.save(savedFileName);
  await exportImage(savedFileName, FOLDER);
  await removeFile(savedFileName);
}

async function run(template, texts) {
  console.log('Number of files to be created: ', texts.length);

  let index = 0;

  for (let text of texts) {
    await generateImageWithText(template, text, index);

    index++;
  }

  console.log('Done. All files created');
}

module.exports = run;