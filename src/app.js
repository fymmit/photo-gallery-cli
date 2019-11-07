const { getByTags } = require('./image-get');

const main = () => {
    const tags = process.argv.filter((x, i) => i > 1);
    getByTags(tags, (result) => {
        if (result.length > 0) {
            const rnd = Math.floor(Math.random() * result.length);
            const randomImage = result[rnd];
            const imageUrl = 'https://photos.timblo.us/' + randomImage.name;
            console.log(imageUrl);
        } else {
            console.log('No images found. :(');
        }
    });
};

module.exports = { main };
