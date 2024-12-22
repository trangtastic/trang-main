const fs = require('fs');
const path = require('path');

module.exports = (config) => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

    // Custom collection to read photos
    config.addCollection('photosList', () => {
        const imageDir = path.join(__dirname, './src/images/photos');
        return fs
            .readdirSync(imageDir)
            .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        pathPrefix: "/trang-demo/",
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};
