/** Command-line tool to generate Markov text. */

const fs = require('fs');
const markov = require('./markov');
const process = require('process');
const axios = require('axios');

function genText(text){
    let mmch = new markov.MarkovMachine(text);
    console.log(mmch.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
      if (err) {
        console.error(`Unable to read file: ${path}: ${err}`);
        process.exit(1);
      } else {
        genText(data);
      }
    });
}

async function makeTextURL(url){
    let res;
    try {
        res = await axios.get(url);
    } catch(err){
        console.error(`Unable to read file: ${url}: ${err}`);
        process.exit(1);
    }
    genText(res.data);
}

let [method, path] = process.argv.slice(2);
if(method === 'file'){
    makeText(path);
} else if(method === 'url'){
    makeTextURL(path);
} else {
    console.error(`Uknown command/method: ${method}`);
    process.exit(1);
}