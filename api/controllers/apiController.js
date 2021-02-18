const csv = require('csvtojson');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', '..', 'data', 'films.csv');
const csvOptions = { delimiter: ';' };


exports.filter = async (request, response) => {
    try {    
        const films = await csv(csvOptions).fromFile(csvFilePath);
        const filter = request.query;
        const filtered = films
            .filter(film=>filter.year?film.year==filter.year:true)        
            .filter(film=>filter.genre?(film.genre1==filter.genre||film.genre2==filter.genre):true);
            // can be easily extended with other filters
        response.send(filtered);
    } catch (error) {
        console.log(error);
    }
}