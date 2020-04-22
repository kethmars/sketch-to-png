const { exec } = require('child_process');

async function exportImage(fileName, folder) {
    return new Promise((resolve, reject) => {
        exec(`sketchtool export artboards ./${fileName} --output=./${folder}/`, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);

                reject();
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                
                reject();
            }
            
            resolve(stdout);
        });
    });
}

async function removeFile(fileName) {
    return new Promise((resolve) => {
        exec(`rm ./${fileName}`, (error, stdout) => {      
            if (error) {
                console.error('Something went wrong', error);
            }

            resolve(stdout);
        });
    });
}

module.exports = {
    exportImage,
    removeFile
}