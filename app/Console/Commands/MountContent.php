<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MountContent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mount:content';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Mounting Content from S3 Storage';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $this->info('Checking configuration...');
            if (!config('app.enable_sync_cloud')) {
                $this->info('Content sync to cloud are disabled, please check your env for ENABLE_SYNC_CLOUD');
                return 0;
            }
            $this->info('Preparing connection...');

            $files = Storage::disk('s3')->allFiles('content');
            $bar = $this->output->createProgressBar(count($files));

            $this->info('Downloading content from cloud...');

            $bar->start();
            foreach ($files as $file) {
                Storage::disk('root')->put($file, Storage::disk('s3')->get($file));
                $bar->advance();
            }
            $bar->finish();
            $this->newLine();

            $this->info('Mounting finished!');
        } catch (\Exception $exception) {
            $this->error('Could not connect to AWS S3, please check your env');
            $this->info('Operation aborted!');
        }
        return 0;
    }
}
