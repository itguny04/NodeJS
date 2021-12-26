var dirPath = './data';
var fs = require('fs');

fs.readdir(dirPath, function(err, filelist){
    console.log(filelist);
});