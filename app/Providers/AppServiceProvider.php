<?php

namespace App\Providers;

use App\Http\Controllers\ChangelogsController;
use Illuminate\Support\ServiceProvider;
use Statamic\Facades\Utility;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Statamic::script('app', 'cp');
        // Statamic::style('app', 'cp');
        Utility::make('changelogs')
            ->title(__('MERMAID Changelogs'))
            ->navTitle(__('Changelogs'))
            ->description(__('Fetch the latest changelogs of MERMAID API'))
            ->icon('git')
            ->action([ChangelogsController::class, 'index'])
            ->routes(function ($router) {
                $router->post('/', [ChangelogsController::class, 'update'])->name('update');
            })
            ->register();
    }
}
