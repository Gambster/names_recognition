const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
let i = 0;
fs.createReadStream(path.resolve(__dirname, 'assets', 'hombres.csv'))
    .pipe(csv.parse({ headers: true }))
    // pipe the parsed input into a csv formatter
    .pipe(csv.format({ headers: true }))
    // Using the transform function from the formatting stream
    .transform((row, next) => {
        console.log(row)
        i++;
        console.log({i})
        next()
    })
    .pipe(process.stdout)
    .on('end', () => process.exit());

    