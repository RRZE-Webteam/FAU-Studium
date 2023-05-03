<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor\WorkflowAuthorTaxonomy;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_Term;
use WP_User;

final class Migration0014WorkflowAuthorsTermMeta
{
    public function __construct()
    {
    }

    public function __invoke(): void
    {
        /** @var array<WP_User> $users */
        $users = get_users(
            [
                'role' => DegreeProgramAuthor::KEY,
            ]
        );

        foreach ($users as $user) {
            $slug = sanitize_term_field(
                'slug',
                $user->user_login,
                0,
                WorkflowAuthorTaxonomy::KEY,
                'db'
            );

            $term = get_term_by('slug', (string) $slug, WorkflowAuthorTaxonomy::KEY);
            if (!$term instanceof WP_Term) {
                continue;
            }
            update_term_meta(
                $term->term_id,
                WorkflowAuthorsRepository::USER_META_KEY,
                $user->ID
            );
        }
    }
}
