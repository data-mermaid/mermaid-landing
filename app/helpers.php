<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

if (!function_exists('isValidUUID')) {
    /**
     * Verify valid UUID from the given string
     */
    function isValidUUID($uuid): bool
    {
        if (!is_string($uuid) || (preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/', $uuid) !== 1)) {
            return false;
        }
        return true;
    }
}
if (!function_exists('fetchChangelog')) {
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
if (!function_exists('humanFilesize')) {
    /**
     * Return the human readable filesize from the size given
     */
    function humanFilesize($size, $precision = 2): string
    {
        $units = array('B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $step = 1024;
        $i = 0;
        while (($size / $step) > 0.9) {
            $size = $size / $step;
            $i++;
        }
        return round($size, $precision) . $units[$i];
    }
}
