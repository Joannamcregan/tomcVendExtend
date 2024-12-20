<?php
/* 
    Plugin Name: TOMC MVXtension
    Version: 1.0
    Author: Joanna
    Description: Extends MVX functionality
*/

if( ! defined('ABSPATH') ) exit;
require_once plugin_dir_path(__FILE__) . 'inc/tomc-mvxtend-isbn-route.php';

class TomcMvxtension {
    function __construct() {
        add_action('activate_tomc-mvxtension/tomc-mvxtension.php', array($this, 'onActivate'));
        //add_action('init', array($this, 'onActivate'));
        add_action('wp_enqueue_scripts', array($this, 'pluginFiles'));
    }	

    function pluginFiles(){
        wp_enqueue_script('tomc-mvxtension-js', plugin_dir_url(__FILE__) . '/build/index.js', array('jquery'), '1.0', true);
        wp_localize_script('tomc-mvxtension-js', 'tomcMvxtensionData', array(
            'root_url' => get_site_url()
        ));
    }

    function onActivate() {
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    }
}

$tomcMvxtension = new TomcMvxtension();