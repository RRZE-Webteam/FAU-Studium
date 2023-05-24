<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor\WorkflowAuthorTaxonomy;
use WP_Error;
use WP_Term;
use WP_User;

class WorkflowAuthorsRepository
{
    public const USER_META_KEY = 'user_id';

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
            $userId = (int) get_term_meta($term->term_id, self::USER_META_KEY, true);
            if (!$userId) {
                continue;
            }

            $user = get_user_by('id', $userId);
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

        foreach ($workflowAuthors as $workflowAuthor) {
            $userId = (int) get_term_meta($workflowAuthor->term_id, self::USER_META_KEY, true);

            if ($userId === $user->ID) {
                return true;
            }
        }

        return false;
    }

    public function create(WP_User $user): void
    {
        /** @var WP_Error|array{term_id: int} $termData */
        $termData = wp_insert_term(
            $this->prepareUserDisplayName($user),
            WorkflowAuthorTaxonomy::KEY,
            [
                'slug' => $user->user_login,
            ]
        );

        if ($termData instanceof WP_Error) {
            return;
        }

        update_term_meta($termData['term_id'], self::USER_META_KEY, $user->ID);
    }

    public function update(WP_User $user): void
    {
        $term = $this->findWorkflowAuthorTermByUser($user);

        if (!$term instanceof WP_Term) {
            return;
        }

        /** @var WP_Error|array{term_id: int} $termData */
        $termData = wp_update_term(
            $term->term_id,
            WorkflowAuthorTaxonomy::KEY,
            [
                'name' => $this->prepareUserDisplayName($user),
                'slug' => $user->user_login,
            ]
        );

        if ($termData instanceof WP_Error) {
            return;
        }

        update_term_meta($termData['term_id'], self::USER_META_KEY, $user->ID);
    }

    public function delete(WP_User $user): void
    {
        $term = $this->findWorkflowAuthorTermByUser($user);

        if (!$term instanceof WP_Term) {
            return;
        }

        wp_delete_term($term->term_id, WorkflowAuthorTaxonomy::KEY);
    }

    private function findWorkflowAuthorTermByUser(WP_User $user): ?WP_Term
    {
        /** @var WP_Error|array<WP_Term> $terms */
        $terms = get_terms(
            [
                'taxonomy' => WorkflowAuthorTaxonomy::KEY,
                'meta_key' => self::USER_META_KEY,
                'meta_value' => $user->ID,
                'hide_empty' => false,
            ]
        );

        if ($terms instanceof WP_Error) {
            return null;
        }

        return $terms[0] ?? null;
    }

    private function prepareUserDisplayName(WP_User $user): string
    {
        if (!$user->first_name && !$user->last_name) {
            return $user->display_name;
        }

        return sprintf('%s %s', $user->first_name, $user->last_name);
    }
}
