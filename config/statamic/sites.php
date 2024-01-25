<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'default' => [
            'name' => 'English',
            'locale' => 'en_US',
            'url' => env('APP_URL'),
        ],
        /*'AR' => [
            'name' => 'Arabic',
            'locale' => 'ar_AE',
            'url' => env('APP_URL_AR'),
            'direction' => 'rtl',
        ],*/
        'ID' => [
            'name' => 'Bahasa Indonesia',
            'locale' => 'id',
            'url' => env('APP_URL_ID'),
        ],
        'FR' => [
            'name' => 'French',
            'locale' => 'fr',
            'url' => env('APP_URL_FR'),
        ],
        'ES' => [
            'name' => 'Spanish',
            'locale' => 'es',
            'url' => env('APP_URL_ES'),
        ],
        /*'FJ' => [
            'name' => 'Fijian',
            'locale' => 'en_FJ',
            'url' => env('APP_URL_FJ'),
        ],
        'PT' => [
            'name' => 'Portuguese (Brazil)',
            'locale' => 'pt',
            'url' => env('APP_URL_PT'),
        ],
        'PT_MZ' => [
            'name' => 'Portuguese (Mozambique)',
            'locale' => 'pt_MZ',
            'url' => env('APP_URL_PT_BR'),
        ],
        'SW' => [
            'name' => 'Swahili',
            'locale' => 'sw',
            'url' => env('APP_URL_SW'),
        ],*/
    ],
];
