<?php

namespace App\Tags;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Statamic\Tags\Tags;

class Changelog extends Tags
{
    /**
     * The {{ changelog }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        if (!Storage::disk('public')->exists(config('app.changelog_path'))) {
            fetchChangelog();
        }
        $lastModified = Storage::disk('public')->lastModified(config('app.changelog_path'));

        if (Carbon::now()->diffInHours(Carbon::parse($lastModified)) > 1 ){
            fetchChangelog();
        }

        $path = Storage::disk('public')->path(config('app.changelog_path'));
        $json = json_decode(file_get_contents($path), true);
        return $json ?? [];
    }
}
