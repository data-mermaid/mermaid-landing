require('dotenv').config();
const mix = require('laravel-mix');
let webpack = require('webpack');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 let dotenvplugin = new webpack.DefinePlugin({
    'process.env': {
        MIX_RECAPTCHA_SITE_KEY: JSON.stringify(process.env.MIX_RECAPTCHA_SITE_KEY || '6LeBdr8hAAAAAGgzC25qIsk6c5M4FfNfyZdB-i-I'),
        MIX_CONTACT_API_URL: JSON.stringify(process.env.MIX_CONTACT_API_URL || 'https://dev-api.datamermaid.org/v1/contactmermaid/'),
        MIX_CONTACT_PROJECT_API_URL: JSON.stringify(process.env.MIX_CONTACT_PROJECT_API_URL || 'https://dev-api.datamermaid.org/v1/contactprojectadmins/'),
    }
});

mix.webpackConfig({
    plugins: [
        dotenvplugin,
    ]
});

mix.autoload({
   'jquery': ['$', 'window.jQuery', "jQuery", "window.$", "jquery", "window.jquery"],
   'popper.js/dist/umd/popper.js': ['Popper', 'window.Popper']
});

mix.js('resources/js/site.js', 'public/js')
    .js('resources/js/recaptcha.js', 'public/js')
    .sourceMaps();

/* tailwind compiler*/
// mix.postCss('resources/css/tailwind.css', 'public/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])

/* bootstrap compiler  */
mix.sass('resources/sass/style.scss', 'public/css')
    .sourceMaps();

if (mix.inProduction()) {
   mix.version();
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])
