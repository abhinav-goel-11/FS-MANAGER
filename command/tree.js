let fs = require("fs");

function tree(path){
    console.log("tree comman executed with path : ");
    let content = fs.readdirSync(path);
    for(let i=0 ; i<content.length ; i++){
        console.log(content[i]);
    }
}

module.exports = {
    treefxn : tree
}