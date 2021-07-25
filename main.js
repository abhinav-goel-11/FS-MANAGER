let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");


let inputArr = process.argv.slice(2);
let path = inputArr[1];
if(path == undefined){
    path = process.cwd()
}

if(inputArr[0] == "help"){
    helpObj.helpfxn();
}else if(inputArr[0] == "tree"){
    treeObj.treefxn(path)
    console.log(inputArr[1]);
}else if(inputArr[0]== "organize"){
    organizeObj.orgfxn(path)
    // console.log(inputArr[1]);
}else{
    console.log("invalid command");
}
