<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

interface Capabilities
{
    public const READ = 'read';
    public const READ_DEGREE_PROGRAM = 'read_degree_program';
    public const READ_PRIVATE_DEGREE_PROGRAMS = 'read_private_degree_programs';

    public const CREATE_DEGREE_PROGRAMS = 'create_degree_programs';
    public const EDIT_DEGREE_PROGRAM = 'edit_degree_program';
    public const EDIT_DEGREE_PROGRAMS = 'edit_degree_programs';
    public const EDIT_PUBLISHED_DEGREE_PROGRAMS = 'edit_published_degree_programs';
    public const EDIT_PRIVATE_DEGREE_PROGRAMS = 'edit_private_degree_programs';
    public const EDIT_OTHERS_DEGREE_PROGRAMS = 'edit_others_degree_programs';

    public const PUBLISH_DEGREE_PROGRAMS = 'publish_degree_programs';

    public const DELETE_DEGREE_PROGRAMS = 'delete_degree_programs';
    public const DELETE_PUBLISHED_DEGREE_PROGRAMS = 'delete_published_degree_programs';
    public const DELETE_OTHERS_DEGREE_PROGRAMS = 'delete_others_degree_programs';

    public const MANAGE_DEGREE_PROGRAM_SETTINGS = 'manage_degree_program_settings';

    public const MANAGE_DEGREE_PROGRAM_TERMS = 'manage_degree_program_terms';
    public const EDIT_DEGREE_PROGRAM_TERMS = 'edit_degree_program_terms';
    public const DELETE_DEGREE_PROGRAM_TERMS = 'delete_degree_program_terms';
    public const ASSIGN_DEGREE_PROGRAM_TERMS = 'assign_degree_program_terms';

    public const MANAGE_WORKFLOW_AUTHORS_TERMS = 'manage_workflow_authors_terms';
    public const EDIT_WORKFLOW_AUTHORS_TERMS = 'edit_workflow_authors_terms';
    public const DELETE_WORKFLOW_AUTHORS_TERMS = 'delete_workflow_authors_terms';
    public const ASSIGN_WORKFLOW_AUTHORS_TERMS = 'assign_workflow_authors_terms';

    public const UPLOAD_FILES = 'upload_files';
}
