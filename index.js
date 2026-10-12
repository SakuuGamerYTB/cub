const fs = require('fs');

const allFileName = fs.readdirSync("./");
const indexObject = {};
// catalog.json regroupe toutes les séries en un seul fichier pour le site (une requête au lieu d'une par série)
const catalog = { generated_at: new Date().toISOString(), series: {} };

allFileName.filter(fileName => fileName.endsWith(".json") && !["index.json", "catalog.json"].includes(fileName)).forEach(jsonName => {
    const json = JSON.parse(fs.readFileSync(`./${jsonName}`));
    if(!json.slug) return;
    indexObject[json.slug] = jsonName;
    catalog.series[json.slug] = json;
})

fs.writeFileSync("./index.json",JSON.stringify(indexObject,null,"\t"))
fs.writeFileSync("./catalog.json",JSON.stringify(catalog))
