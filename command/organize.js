let fs = require("fs");
let path1 = require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organize(path){
    
    let content = fs.readdirSync(path);

    let folderPath = path1.join(path,"organize");
    let organisePresent = fs.existsSync(folderPath); 
        if(organisePresent) {
            console.log("directory is already created");     
             return; 
        }

    fs.mkdirSync(folderPath);

    let mediaPath = path1.join(folderPath,"media");
    fs.mkdirSync(mediaPath);

    let archivespath = path1.join(folderPath,"archives");
    fs.mkdirSync(archivespath);

    let documentsPath = path1.join(folderPath,"documents");
    fs.mkdirSync(documentsPath);

    let appPath = path1.join(folderPath,"app");
    fs.mkdirSync(appPath);

    let otherPath = path1.join(folderPath,"other");
    fs.mkdirSync(otherPath);

    for(let i=0 ; i<content.length ; i++){
        let extwd = path1.extname(content[i]);
        let ext = extwd.split(".")[1];

        let folderName = "other";
        for(key in types){
            for(let j = 0 ; j < types[key].length ; j++){
                if(ext == types[key][j]){
                   folderName = key;
                   break;
                }
            }
        }
        let srcpath = path1.join(path,content[i]);
        let destPath = path1.join(folderPath,folderName,content[i]);
        fs.copyFileSync(srcpath,destPath);
    }


}

module.exports = {
    orgfxn : organize
}