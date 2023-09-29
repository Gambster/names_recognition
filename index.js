const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const ner = require('wink-ner');
let i = 0;
let j = 0;
let k = 0;
const data = fs.readFileSync("learning.json", 'utf8');
// const data_m = fs.readFileSync("male_learning.json", 'utf8');
// const data_f = fs.readFileSync("female_learning.json", 'utf8');

const myNER = ner();
myNER.importJSON(data);
// myNER.importJSON(data_m);
// myNER.importJSON(data_f);
var winkTokenizer = require('wink-tokenizer');

var tokenize = winkTokenizer().tokenize;

var tokens = tokenize('A nombre de Juan');

tokens = myNER.recognize(tokens);
console.log(tokens);
// const training_data = []
// const main = async () => {
//     fs.createReadStream(path.resolve(__dirname, 'assets', 'apellidos.csv'))
//         .pipe(csv.parse({ headers: true }))
//         // pipe the parsed input into a csv formatter
//         .pipe(csv.format({ headers: true }))
//         // Using the transform function from the formatting stream
//         .transform((row, next) => {
//             const { nombre: lastname } = row
//             if (lastname.length > 3) {
//                 i++;
//                 training_data.push({ text: lastname, entityType: "lastname" });
//             }


//             if (i == 7721) {

//                 fs.createReadStream(path.resolve(__dirname, 'assets', 'hombres.csv'))
//                     .pipe(csv.parse({ headers: true }))
//                     // pipe the parsed input into a csv formatter
//                     .pipe(csv.format({ headers: true }))
//                     // Using the transform function from the formatting stream
//                     .transform((row, next) => {
//                         const { nombre: male_name } = row
//                         if (male_name.length > 3) {
//                             j++;
//                             training_data.push({ text: male_name, entityType: "male_name" });
//                         }


//                         if (j == 5337) {

//                             fs.createReadStream(path.resolve(__dirname, 'assets', 'mujeres.csv'))
//                                 .pipe(csv.parse({ headers: true }))
//                                 // pipe the parsed input into a csv formatter
//                                 .pipe(csv.format({ headers: true }))
//                                 // Using the transform function from the formatting stream
//                                 .transform((row, next) => {
//                                     const { nombre: female_name } = row
//                                     if (female_name.length > 3) {
//                                         k++;
//                                         training_data.push({ text: female_name, entityType: "female_name" });
//                                         console.log(k)
//                                     }


//                                     if (k == 10741) {

//                                         myNER.learn(training_data);

//                                         var winkTokenizer = require('wink-tokenizer');

//                                         var tokenize = winkTokenizer().tokenize;

//                                         var tokens = tokenize('Buen dia tiene envio a domicilio a nombre de luis?');

//                                         tokens = myNER.recognize(tokens);

//                                         const learnings = myNER.exportJSON();
//                                         fs.writeFileSync('learning.json', learnings);
//                                     }
//                                     next()
//                                 })
//                                 .pipe(process.stdout)
//                                 .on('end', () => {
//                                     console.log("oa")
//                                 });

//                         }
//                         next()
//                     })
//                     .pipe(process.stdout)
//                     .on('end', () => {
//                         console.log("oa")
//                     });

//             }
//             next()
//         })
//         .pipe(process.stdout)
//         .on('end', () => {
//             console.log("oa")
//         });
// };
// main();
