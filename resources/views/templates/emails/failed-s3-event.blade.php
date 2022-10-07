@component('mail::message')
# Whoops! Failed to backup content/asset to S3 storage.
@component('mail::panel')
## [{{ $action }}] {{ $path }}
### {{ $event_date }} UTC
@component('mail::subcopy')
    {{ $message }}
@endcomponent
@endcomponent

@endcomponent