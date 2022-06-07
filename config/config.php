<?php

namespace FAU_Studium\Config;

defined('ABSPATH') || exit;

/**
 * Gibt der Name der Option zurück.
 * @return array [description]
 */
function getOptionName()
{
    return 'fau_studium';
}

/**
 * Gibt die Einstellungen des Menus zurück.
 * @return array [description]
 */
function getMenuSettings()
{
    return [
        'page_title'    => __('FAU Studium', 'fau-studium'),
        'menu_title'    => __('FAU Studium', 'fau-studium'),
        'capability'    => 'manage_options',
        'menu_slug'     => 'fau-studium',
        'title'         => __('FAU Studium Settings', 'fau-studium'),
    ];
}

/**
 * Gibt die Einstellungen der Inhaltshilfe zurück.
 * @return array [description]
 */
function getHelpTab()
{
    return [
        [
            'id'        => 'fau-studium-help',
            'content'   => [
                '<p>' . __('Here comes the Context Help content.', 'fau-studium') . '</p>'
            ],
            'title'     => __('Overview', 'fau-studium'),
            'sidebar'   => sprintf('<p><strong>%1$s:</strong></p><p><a href="https://blogs.fau.de/webworking">RRZE Webworking</a></p><p><a href="https://github.com/RRZE Webteam">%2$s</a></p>', __('For more information', 'fau-studium'), __('RRZE Webteam on Github', 'fau-studium'))
        ]
    ];
}

/**
 * Gibt die Einstellungen der Optionsbereiche zurück.
 * @return array [description]
 */
function getSections()
{
    return [
        [
            'id'    => 'basic',
            'title' => __('Basic Settings', 'fau-studium')
        ],
        [
            'id'    => 'advanced',
            'title' => __('Advanced Settings', 'fau-studium')
        ]
    ];
}

/**
 * Gibt die Einstellungen der Optionsfelder zurück.
 * @return array [description]
 */
function getFields()
{
    return [
        'basic' => [
            [
                'name'              => 'text_input',
                'label'             => __('Text Input', 'fau-studium'),
                'desc'              => __('Text input description.', 'fau-studium'),
                'placeholder'       => __('Text Input placeholder', 'fau-studium'),
                'type'              => 'text',
                'default'           => 'Title',
                'sanitize_callback' => 'sanitize_text_field'
            ],
            [
                'name'              => 'number_input',
                'label'             => __('Number Input', 'fau-studium'),
                'desc'              => __('Number input description.', 'fau-studium'),
                'placeholder'       => '5',
                'min'               => 0,
                'max'               => 100,
                'step'              => '1',
                'type'              => 'number',
                'default'           => 'Title',
                'sanitize_callback' => 'floatval'
            ],
            [
                'name'        => 'textarea',
                'label'       => __('Textarea Input', 'fau-studium'),
                'desc'        => __('Textarea description', 'fau-studium'),
                'placeholder' => __('Textarea placeholder', 'fau-studium'),
                'type'        => 'textarea'
            ],
            [
                'name'  => 'checkbox',
                'label' => __('Checkbox', 'fau-studium'),
                'desc'  => __('Checkbox description', 'fau-studium'),
                'type'  => 'checkbox'
            ],
            [
                'name'    => 'multicheck',
                'label'   => __('Multiple checkbox', 'fau-studium'),
                'desc'    => __('Multiple checkbox description.', 'fau-studium'),
                'type'    => 'multicheck',
                'default' => [
                    'one' => 'one',
                    'two' => 'two'
                ],
                'options'   => [
                    'one'   => __('One', 'fau-studium'),
                    'two'   => __('Two', 'fau-studium'),
                    'three' => __('Three', 'fau-studium'),
                    'four'  => __('Four', 'fau-studium')
                ]
            ],
            [
                'name'    => 'radio',
                'label'   => __('Radio Button', 'fau-studium'),
                'desc'    => __('Radio button description.', 'fau-studium'),
                'type'    => 'radio',
                'options' => [
                    'yes' => __('Yes', 'fau-studium'),
                    'no'  => __('No', 'fau-studium')
                ]
            ],
            [
                'name'    => 'selectbox',
                'label'   => __('Dropdown', 'fau-studium'),
                'desc'    => __('Dropdown description.', 'fau-studium'),
                'type'    => 'select',
                'default' => 'no',
                'options' => [
                    'yes' => __('Yes', 'fau-studium'),
                    'no'  => __('No', 'fau-studium')
                ]
            ]
        ],
        'advanced' => [
            [
                'name'    => 'color',
                'label'   => __('Color', 'fau-studium'),
                'desc'    => __('Color description.', 'fau-studium'),
                'type'    => 'color',
                'default' => ''
            ],
            [
                'name'    => 'password',
                'label'   => __('Password', 'fau-studium'),
                'desc'    => __('Password description.', 'fau-studium'),
                'type'    => 'password',
                'default' => ''
            ],
            [
                'name'    => 'wysiwyg',
                'label'   => __('Advanced Editor', 'fau-studium'),
                'desc'    => __('Advanced Editor description.', 'fau-studium'),
                'type'    => 'wysiwyg',
                'default' => ''
            ],
            [
                'name'    => 'file',
                'label'   => __('File', 'fau-studium'),
                'desc'    => __('File description.', 'fau-studium'),
                'type'    => 'file',
                'default' => '',
                'options' => [
                    'button_label' => __('Choose an Image', 'fau-studium')
                ]
            ]
        ]
    ];
}


/**
 * Gibt die Einstellungen der Parameter für Shortcode für den klassischen Editor und für Gutenberg zurück.
 * @return array [description]
 */

function getShortcodeSettings(){
	return [
		'block' => [
		    'blocktype' => 'fau-studium/SHORTCODE-NAME', // dieser Wert muss angepasst werden
		    'blockname' => 'SHORTCODE-NAME', // dieser Wert muss angepasst werden
		    'title' => 'SHORTCODE-TITEL', // Der Titel, der in der Blockauswahl im Gutenberg Editor angezeigt wird
		    'category' => 'widgets', // Die Kategorie, in der der Block im Gutenberg Editor angezeigt wird
		    'icon' => 'admin-users',  // Das Icon des Blocks
		    'tinymce_icon' => 'user', // Das Icon im TinyMCE Editor 
		],
		'Beispiel-Textfeld-Text' => [
			'default' => 'ein Beispiel-Wert',
			'field_type' => 'text', // Art des Feldes im Gutenberg Editor
			'label' => __( 'Beschriftung', 'fau-studium' ),
			'type' => 'string' // Variablentyp der Eingabe
		],
		'Beispiel-Textfeld-Number' => [
			'default' => 0,
			'field_type' => 'text', // Art des Feldes im Gutenberg Editor
			'label' => __( 'Beschriftung', 'fau-studium' ),
			'type' => 'number' // Variablentyp der Eingabe
		],
		'Beispiel-Textarea-String' => [
			'default' => 'ein Beispiel-Wert',
			'field_type' => 'textarea',
			'label' => __( 'Beschriftung', 'fau-studium' ),
			'type' => 'string',
			'rows' => 5 // Anzahl der Zeilen 
		],
		'Beispiel-Radiobutton' => [
			'values' => [
				'wert1' => __( 'Wert 1', 'fau-studium' ), // wert1 mit Beschriftung
				'wert2' => __( 'Wert 2', 'fau-studium' )
			],
			'default' => 'DESC', // vorausgewählter Wert
			'field_type' => 'radio',
			'label' => __( 'Order', 'fau-studium' ), // Beschriftung der Radiobutton-Gruppe
			'type' => 'string' // Variablentyp des auswählbaren Werts
		],
		'Beispiel-Checkbox' => [
			'field_type' => 'checkbox',
			'label' => __( 'Beschriftung', 'fau-studium' ),
			'type' => 'boolean',
			'default'   => true // Vorauswahl: Haken gesetzt
        ],
        'Beispiel-Toggle' => [
            'field_type' => 'toggle',
            'label' => __( 'Beschriftung', 'fau-studium' ),
            'type' => 'boolean',
            'default'   => true // Vorauswahl: ausgewählt
        ],
	'Beispiel-Select' => [
		'values' => [
		    [
			'id' => 'wert1',
			'val' =>  __( 'Wert 1', 'fau-studium' )
		    ],
		    [
			'id' => 'wert2',
			'val' =>  __( 'Wert 2', 'fau-studium' )
		    ],
		],
		'default' => 'wert1', // vorausgewählter Wert: Achtung: string, kein array!
		'field_type' => 'select',
		'label' => __( 'Beschriftung', 'fau-studium' ),
		'type' => 'string' // Variablentyp des auswählbaren Werts
	],
        'Beispiel-Multi-Select' => [
		'values' => [
		    [
			'id' => 'wert1',
			'val' =>  __( 'Wert 1', 'fau-studium' )
		    ],
		    [
			'id' => 'wert2',
			'val' =>  __( 'Wert 2', 'fau-studium' )
		    ],
		    [
			'id' => 'wert3',
			'val' =>  __( 'Wert 3', 'fau-studium' )
		    ],
		],
		'default' => ['wert1','wert3'], // vorausgewählte(r) Wert(e): Achtung: array, kein string!
		'field_type' => 'multi_select',
		'label' => __( 'Beschrifung', 'fau-studium' ),
		'type' => 'array',
		'items'   => [
			'type' => 'string' // Variablentyp der auswählbaren Werte
		]
        ]
    ];
}

