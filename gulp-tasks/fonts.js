const GetGoogleFonts = require('get-google-fonts');

const fonts = async () => {
    const instance = new GetGoogleFonts({
        outputDir: './docs/fonts',
        cssFile: './fonts.css',
    });

    return instance.download(
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Jost:ital,wght@0,100..900;1,100..900&display=swap'
    );
};

module.exports = fonts;
