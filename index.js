const fs = require('fs');

const allFileName = fs.readdirSync("./");
const indexObject = {};

allFileName.filter(fileName => fileName.endsWith(".json")).forEach(jsonName => {
    const json = JSON.parse(fs.readFileSync(`./${jsonName}`));
    if(!json.slug) return;
    indexObject[json.slug] = jsonName;
})

fs.writeFileSync("./index.json",JSON.stringify(indexObject,null,"\t"))
