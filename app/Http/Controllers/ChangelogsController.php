<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Statamic\Http\Controllers\CP\CpController;

class ChangelogsController extends CpController
{
    public function index()
    {
        if (!Storage::disk('public')->exists(config('app.changelog_path'))) {
            fetchChangelog();
        }
        $size = Storage::disk('public')->size(config('app.changelog_path'));
        $path = Storage::disk('public')->url(config('app.changelog_path'));
        $lastModified = Storage::disk('public')->lastModified(config('app.changelog_path'));

        if (Carbon::parse($lastModified)->isLastHour()) fetchChangelog();

        return view('cp/utilities/changelogs', [
            'size' => humanFilesize($size ?? 0),
            'path' => $path ?? 'N/A',
            'lastModified' => optional(Carbon::parse($lastModified))->format('D, Y d M H:i:s') ?? 'N/A'
        ]);
    }

    public function update()
    {
        if (!fetchChangelog()) {
            return back()->withErrors(__('Failed to update changelog'));
        }
        return back()->withSuccess(__('Changelog updated'));
    }
}
