<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Statamic\Events\AssetDeleted;
use Statamic\Events\AssetSaved;
use Statamic\Events\CollectionDeleted;
use Statamic\Events\CollectionSaved;
use Statamic\Events\CollectionTreeDeleted;
use Statamic\Events\CollectionTreeSaved;
use Statamic\Events\EntryDeleted;
use Statamic\Events\EntrySaved;
use Statamic\Events\GlobalSetDeleted;
use Statamic\Events\GlobalSetSaved;
use Statamic\Events\NavDeleted;
use Statamic\Events\NavSaved;
use Statamic\Events\NavTreeDeleted;
use Statamic\Events\NavTreeSaved;
use Statamic\Events\TaxonomyDeleted;
use Statamic\Events\TaxonomySaved;
use Statamic\Events\TermDeleted;
use Statamic\Events\TermSaved;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        if (!config('app.enable_sync_cloud')) {
            // Asset
            Event::listen(fn(AssetSaved $event) => $this->updateFileS3($event->asset->path()));
            Event::listen(fn(AssetDeleted $event) => $this->deleteFileS3($event->asset->path()));

            // Entry
            Event::listen(fn(EntrySaved $event) => $this->updateFileS3($event->entry->path()));
            Event::listen(fn(EntryDeleted $event) => $this->deleteFileS3($event->entry->path()));

            // Nav
            Event::listen(fn(NavSaved $event) => $this->updateFileS3($event->nav->path()));
            Event::listen(fn(NavDeleted $event) => $this->deleteFileS3($event->nav->path()));

            // NavTree
            Event::listen(fn(NavTreeSaved $event) => $this->updateFileS3($event->tree->path()));
            Event::listen(fn(NavTreeDeleted $event) => $this->deleteFileS3($event->tree->path()));

            // Collection
            Event::listen(fn(CollectionSaved $event) => $this->updateFileS3($event->collection->path()));
            Event::listen(fn(CollectionDeleted $event) => $this->deleteFileS3($event->collection->path()));

            // CollectionTree
            Event::listen(fn(CollectionTreeSaved $event) => $this->updateFileS3($event->tree->path()));
            Event::listen(fn(CollectionTreeDeleted $event) => $this->deleteFileS3($event->tree->path()));

            // GlobalSet
            Event::listen(fn(GlobalSetSaved $event) => $this->updateFileS3($event->globals->path()));
            Event::listen(fn(GlobalSetDeleted $event) => $this->deleteFileS3($event->globals->path()));

            // Taxonomy
            Event::listen(fn(TaxonomySaved $event) => $this->updateFileS3($event->taxonomy->path()));
            Event::listen(fn(TaxonomyDeleted $event) => $this->deleteFileS3($event->taxonomy->path()));

            // Term
            Event::listen(fn(TermSaved $event) => $this->updateFileS3($event->term->path()));
            Event::listen(fn(TermDeleted $event) => $this->deleteFileS3($event->term->path()));
        }
    }

    /**
     * Update/override the file and sync to S3
     * Dispatched after an resource has been saved.
     *
     * @param string $path
     */
    private function updateFileS3(string $path)
    {
        try {
            $file = ltrim(Str::replace(base_path(''), '', $path), '/');

            if (Storage::disk('s3')->exists($file)) {
                Storage::disk('s3')->delete($file);
            }

            Storage::disk('s3')->put($file, Storage::disk('root')->get($file));
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
        }
    }

    /**
     * Delete the file and sync to S3
     * Dispatched after a resource has been deleted.
     *
     * @param string $path
     */
    private function deleteFileS3(string $path)
    {
        try {
            $file = ltrim(Str::replace(base_path(''), '', $path), '/');

            if (Storage::disk('s3')->exists($file)) {
                Storage::disk('s3')->delete($file);
            }
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
        }
    }
}
