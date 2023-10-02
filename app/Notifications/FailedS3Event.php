<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;
use \Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Log;

class FailedS3Event extends Notification
{
    private $event;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($event)
    {
        $this->event = $event;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via()
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail()
    {
        Log::info('Sending email to: ' . config('mail.event_notification') . ', path: ' . $this->event['path']);
        return (new MailMessage)
            ->subject('Failed to backup content/asset')
            ->markdown('templates.emails.failed-s3-event', [
                'event_date' => date('c'),
                'action' => $this->event['action'],
                'path' => $this->event['path'],
                'message' => $this->event['message']
            ]);
    }
}
