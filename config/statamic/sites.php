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
            'url' => '/',
        ],
        'AR' => [
            'name' => 'Arabic',
            'locale' => 'ar_AE',
            'url' => env('APP_URL_AR'),
            'direction' => 'rtl',
        ],
        'ID' => [
            'name' => 'Bahasa Indonesia',
            'locale' => 'in_ID',
            'url' => env('APP_URL_ID'),
        ],
        'FJ' => [
            'name' => 'Fijian',
            'locale' => 'en_FJ',
            'url' => env('APP_URL_FJ'),
        ],
        'FR' => [
            'name' => 'French',
            'locale' => 'fr',
            'url' => env('APP_URL_FR'),
        ],
        'PT_BR' => [
            'name' => 'Portuguese (Brazil)',
            'locale' => 'pt_BR',
            'url' => env('APP_URL_PT_BR'),
        ],
        'PT_MZ' => [
            'name' => 'Portuguese (Mozambique)',
            'locale' => 'pt_MZ',
            'url' => env('APP_URL_PT_BR'),
        ],
        'ES' => [
            'name' => 'Spanish',
            'locale' => 'es',
            'url' => env('APP_URL_ES'),
        ],
        'SW' => [
            'name' => 'Swahili',
            'locale' => 'sw',
            'url' => env('APP_URL_SW'),
        ],
    ],
];
