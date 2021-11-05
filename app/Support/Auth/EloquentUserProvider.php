<?php

namespace App\Support\Auth;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Grammars\PostgresGrammar;
use Illuminate\Auth\EloquentUserProvider as UserProvider;

class EloquentUserProvider extends UserProvider
{
    /**
     * Retrieve a user by the given credentials.
     *
     * @param array $credentials
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function retrieveByCredentials(array $credentials)
    {
        if (empty($credentials)) {
            return;
        }

        return $this->createModel()
            ->newQuery()
            ->where(function ($query) use ($credentials) {
                foreach ($credentials as $key => $value) {
                    if ($this->isPostgresGrammar($query) && in_array($key, ['email', 'username'])) {
                        $query->whereRaw("LOWER({$key}) = LOWER(:value)", ['value' => $value]);
                    } elseif (!Str::contains($key, 'password')) {
                        $query->where($key, $value);
                    }
                }
            })
            ->first();
    }

    protected function isPostgresGrammar(Builder $query)
    {
        return $query->getQuery()->getGrammar() instanceof PostgresGrammar;
    }
}
