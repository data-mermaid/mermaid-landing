<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

if (! function_exists('fetchChangelog')) {
    /**
     * Fetching the MERMAID Changelog, then store to local server
     */
    function fetchChangelog()
    {
        $response = Http::get(config('app.changelog_url'));
        if (!$response->ok()) {
            return false;
        }
        Storage::disk('public')->put(config('app.changelog_path'), json_encode($response->json()));
        return true;
    }
}
if (! function_exists('humanFilesize')) {
    /**
     * Return the human readable filesize from the size given
     */
    function humanFilesize($size, $precision = 2): string
    {
        $units = array('B','kB','MB','GB','TB','PB','EB','ZB','YB');
        $step = 1024;
        $i = 0;
        while (($size / $step) > 0.9) {
            $size = $size / $step;
            $i++;
        }
        return round($size, $precision).$units[$i];
    }
}
