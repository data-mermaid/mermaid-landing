@extends('statamic::layout')
@section('title', Statamic::crumb(__('Changelog'), __('Utilities')))

@section('content')

    <header class="mb-3">
        @include('statamic::partials.breadcrumb', [
            'url' => cp_route('utilities.index'),
            'title' => __('Utilities')
        ])
        <h1>{{ __('Changelog') }}</h1>
    </header>

    <div class="card">
        <form method="POST" action="{{ cp_route('utilities.changelogs.update') }}">
            @csrf

            <div class="flex items-center">
                <button type="submit" class="btn-default">{{ __('Update Now') }}</button>
            </div>
        </form>
    </div>

    <h2 class="mt-5 mb-1 font-bold text-lg">{{ __('Current Changelog') }}</h2>
    <p class="text-sm text-grey mb-2">{{ __('If the last fetch is more than an hour ago, it will fetching the the latest one')  }}</p>
    <div class="card p-0">
        <table class="data-table">
            <tr>
                <th class="pl-2 py-1 w-1/4">{{ __('Last Updated') }}</th>
                <td>
                   {{ $lastModified }}
                </td>
            </tr>
            <tr>
                <th class="pl-2 py-1 w-1/4">{{ __('Local Paths') }}</th>
                <td>
                    <a href="{{ $path }}" target="_blank"><code>{{ $path }}</code></a>
                </td>
            </tr>
            <tr>
                <th class="pl-2 py-1 w-1/4">{{ __('File size') }}</th>
                <td>
                    <code>{{ $size }}</code>
                </td>
            </tr>
            <tr>
                <th class="pl-2 py-1 w-1/4">{{ __('Fetch Url') }}</th>
                <td>
                    <code>{{ config('app.changelog_url') }}</code>
                </td>
            </tr>
        </table>
    </div>

@stop
