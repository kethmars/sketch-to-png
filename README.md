# sketch-to-png script
This script lets you easily create and export high-quality png files in Sketch based on the text you've inserted.

## Why?
I needed a way to generate huge amount of PNGs from the same Sketch template. Manual work was boring.

## Preqreuisites
- You need Sketch. [https://www.sketch.com/](https://www.sketch.com/)
- SketchCli must be available globally. [https://developer.sketch.com/cli/](https://developer.sketch.com/cli/)

## How to use?
- Input the text in `index.js`
- Run `node index.js`
- Images will appear in the `run` folder

## Good to know
- You can specify the template in the command. Eg `node index.js white` and `node index.js blue`
- You can create your own Sketch templates. Just make sure there's a folder called `main-text` with text inside of it.
