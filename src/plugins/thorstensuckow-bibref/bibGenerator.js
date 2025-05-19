const fs = require('fs');
const path = require('path');
const bibtexParse = require('bibtex-parse-js');

const rootBibDir = path.resolve(__dirname, '../../../static/bibref');
const outPath = path.resolve(__dirname, '../../../static/bibref/combined-bib.json');

const latexToUnicode = (str) =>
    str
        .replace(/\\\"a/g, 'ä')
        .replace(/\\\"o/g, 'ö')
        .replace(/\\\"u/g, 'ü')
        .replace(/\\\"A/g, 'Ä')
        .replace(/\\\"O/g, 'Ö')
        .replace(/\\\"U/g, 'Ü')
        .replace(/\\\'e/g, 'é')
        .replace(/\\\'a/g, 'á')
        .replace(/\\\`e/g, 'è')
        .replace(/\\\`a/g, 'à')
        .replace(/\\\^o/g, 'ô')
        .replace(/\\\^e/g, 'ê')
        .replace(/\\c{c}/g, 'ç')
        .replace(/\\ss/g, 'ß')
        .replace(/\{\\\"o\}/g, 'ö')
        .replace(/\{\\\"u\}/g, 'ü')
        .replace(/\{\\\"a\}/g, 'ä')
        .replace(/\{\\\'e\}/g, 'é')
        .replace(/\{\\\'a\}/g, 'á')
        .replace(/\{\\ss\}/g, 'ß')
        .replace(/\{\\c c\}/g, 'ç')
        .replace(/\{\\~n\}/g, 'ñ')
        .replace(/\{\\\^o\}/g, 'ô')
        .replace(/\{\\\^e\}/g, 'ê')
        .replace(/\\&/g, '&');


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


const stripAllBraces = (str) => {
    let prev;
    do {
        prev = str;
        str = str.replace(/\{([^{}]*)\}/g, '$1');
    } while (str !== prev);
    return str;
};

const cleanFields = (entryTags) => {
    const cleaned = {};
    for (const [key, value] of Object.entries(entryTags)) {
        if (typeof value === 'string') {
            const bracesStripped = stripAllBraces(value);
            const unicode = latexToUnicode(bracesStripped);
            cleaned[key] = unicode;
        } else {
            cleaned[key] = value;
        }
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
