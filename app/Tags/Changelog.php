<?php

namespace App\Tags;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Statamic\Tags\Tags;

class Changelog extends Tags
{
    /**
     * @var bool
     */
    public bool $isSuccess = false;

    /**
     * @var array
     */
    public array $response = [];

    public function __construct()
    {
        try {
            $response = Http::get(config('app.changelog_url'));
            if ($response->ok()) {
                $this->isSuccess = true;
                $this->response = $response->json();
            }
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
        }
    }

    /**
     * The {{ changelog }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        return $this->response;
    }

    /**
     * The {{ changelog:check }} tag.
     * checking the status of the response
     *
     * @return bool
     */
    public function check(): bool
    {
        return $this->isSuccess;
    }
}
