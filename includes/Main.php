<?php

namespace FAU_Studium;

defined('ABSPATH') || exit;

	

/**
 * Hauptklasse (Main)
 */

class Main {
    protected $pluginFile;
    private $settings = '';

    public function __construct($pluginFile) {
        $this->pluginFile = $pluginFile;
    }

    /**
     * Es wird ausgeführt, sobald die Klasse instanziiert wird.
     */
    public function onLoaded() {
	 add_action('wp_enqueue_scripts', [$this, 'registerPluginStyles']);
	// Settings-Klasse wird instanziiert.
	 add_action('admin_enqueue_scripts', [$this, 'enqueueAdminScripts']);
	 
	 // Add and load other classes here
	 
	return;			
    }
    
    
    
    
    public function registerPluginStyles() {
	wp_register_style('fau-studium', plugins_url('css/fau-studium.css', plugin_basename($this->pluginFile)));
    }
    
     public function enqueueAdminScripts() {
	wp_register_style('fau-studium-adminstyle', plugins_url('css/fau-studium-admin.css', plugin_basename($this->pluginFile)));
	wp_enqueue_style('fau-studium-adminstyle');
	wp_register_script('fau-studium-adminscripts', plugins_url('js/fau-studium-admin.js', plugin_basename($this->pluginFile)));
	wp_enqueue_script('fau-studium-adminscripts');
	
    }

    
    
    public static function enqueueForeignThemes() {
	 wp_enqueue_style('fau-studium');  
    }
    
  
}


