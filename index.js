const minimist = require('minimist');

 module.exports =  () => {
    const args = minimist(process.argv.slice(2));
    console.log(args);
}