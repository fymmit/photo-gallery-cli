const http = require('https');

const url = 'https://photos.timblo.us/images';

const getByTags = (tags, callback) => {
    const query = tags.map((x, i) => i === 0 ? `?tags=${x}` : `&tags=${x}`);
    http.get(`${url}${query}`, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const result = JSON.parse(data);
            callback(result);
        });

    }).on('error', (err) => {
        console.log(err.message);
    });
};

module.exports = { getByTags };
