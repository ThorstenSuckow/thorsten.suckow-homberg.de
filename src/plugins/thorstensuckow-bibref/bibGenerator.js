const fs = require('fs');
const path = require('path');
const bibtexParse = require('bibtex-parse-js');

const rootBibDir = path.resolve(__dirname, '../../../static/bibref');
const outPath = path.resolve(__dirname, '../../../static/bibref/combined-bib.json');


function findBibFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (file.endsWith('.bib')) {
            results.push(fullPath);
        }
    }
    return results;
}

const stripDoubleBraces = (text) =>
    text.replace(/\{\{(.*?)\}\}/g, '$1');


const cleanFields = (entryTags) => {
    const cleaned = {};
    for (const [key, value] of Object.entries(entryTags)) {
        cleaned[key] = typeof value === 'string'
            ? stripDoubleBraces(value)
            : value;
    }
    return cleaned;
};

const entries = {};
const bibFiles = findBibFiles(rootBibDir);

bibFiles.forEach(bibPath => {
    const raw = fs.readFileSync(bibPath, 'utf8');
    const parsed = bibtexParse.toJSON(raw);

    parsed.forEach(entry => {
        if (entry.citationKey) {
            const fullKey = `${entry.citationKey}`;
            entries[fullKey.toLowerCase()] = {
                ...cleanFields(entry.entryTags),
                _original: entry.original,
            };
        }
    });
});

fs.writeFileSync(outPath, JSON.stringify(entries, null, 2));
console.log(`✓ Converted ${Object.keys(entries).length} entries from ${bibFiles.length} files into ${outPath}`);
