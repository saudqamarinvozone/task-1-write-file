require('dotenv').config();
const fs = require('fs');
const os = require('os');

const content = `Free Memory: ${os.freemem()} 
Platform: ${os.platform()}
Free Memory: ${os.freemem()}
Home Dir: ${os.homedir()}`;

async function firstMethod () {

    try {
        const file = await createFile();
        console.log(file);
    } catch (err) {
        console.error('Error', err.message);
    }

}

function createFile(){
    return new Promise( (resolve, reject) => {

        fs.writeFile(os.homedir()+process.env.FILE_PATH, content, {flag: 'a+'}, err => {
            if (err) {
                reject(err)
            } else {
                resolve({id: 1})
            }

        })

    });
}

firstMethod();

