<?php

namespace App\Tags;

use Illuminate\Support\Facades\DB;
use Statamic\Tags\Tags;

class ContactEmail extends Tags
{
    /**
     * The {{ contact_email }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        $project_id = $this->params->get('project_id', null);
        $showAttribute = $this->params->get('show', 'emails');
        if (isValidUUID($project_id)) {
            $projectAdmin = DB::connection('pgsql_2')
                ->table('vw_project_admins')
                ->where('project_id', $project_id)
                ->first();
            $contact = $projectAdmin->{$showAttribute};
        }
        return $contact ?? null;
    }
}
