<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor\WorkflowAuthorTaxonomy;
use WP_Error;
use WP_Term;
use WP_User;

class WorkflowAuthorsRepository
{
    /**
     * @param int $postId
     * @return WP_Term[]|null
     */
    public function fetchForPost(int $postId): ?array
    {
        $terms = get_the_terms($postId, WorkflowAuthorTaxonomy::KEY);
        if ($terms instanceof WP_Error) {
            return null;
        }

        return $terms ? : null;
    }

    /**
     * @return array<int>
     */
    public function fetchAuthorIds(int $postId): array
    {
        $terms = $this->fetchForPost($postId);
        if (!$terms) {
            return [];
        }

        $result = [];
        foreach ($terms as $term) {
            $user = get_user_by('login', $term->name);
            if (!$user instanceof WP_User) {
                continue;
            }

            $result[] = $user->ID;
        }

        return $result;
    }

    public function isUserListedInAllowedEditors(WP_User $user, int $postId): bool
    {
        $workflowAuthors = $this->fetchForPost($postId);
        if (! $workflowAuthors) {
            return false;
        }

        $workflowAuthorUsernames = wp_list_pluck($workflowAuthors, 'name');
        return in_array($user->user_login, $workflowAuthorUsernames, true);
    }

    public function create(string $username): void
    {
        wp_create_term($username, WorkflowAuthorTaxonomy::KEY);
    }

    public function delete(string $username): void
    {
        /**
         * @var null|array{term_id: int, term_taxonomy_id: int} $term
         */
        $term = term_exists($username, WorkflowAuthorTaxonomy::KEY);
        if ($term === null) {
            return;
        }

        wp_delete_term($term['term_id'], WorkflowAuthorTaxonomy::KEY);
    }
}
