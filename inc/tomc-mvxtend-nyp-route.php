<?php

add_action('rest_api_init', 'tomcMVXtendNYPRegisterRoute');

function tomcMVXtendNYPRegisterRoute() {
    register_rest_route('tomcMVXtendNYP/v1', 'enableNYP', array(
        'methods' => 'POST',
        'callback' => 'enableNYP'
    ));
    register_rest_route('tomcMVXtendNYP/v1', 'disableNYP', array(
        'methods' => 'POST',
        'callback' => 'disableNYP'
    ));
}

function enableNYP($data){
    global $wpdb;
    $user = wp_get_current_user();
    $postmeta_table =  $wpdb->prefix . "postmeta";
    $min = sanitize_text_field($data['min']);
    $max = sanitize_text_field($data['max']);
    $id = sanitize_text_field($data['id']);
    if (is_user_logged_in() && in_array( 'dc_vendor', (array) $user->roles )){
        $deleteQuery = 'delete from %i
        where post_id = %d
        and meta_key in (%s, %s)';
        $wpdb->query($wpdb->prepare($deleteQuery, $postmeta_table, $id, "_woonp_min", "_woonp_max"));
        $minQuery = 'insert into %i (post_id, meta_key, meta_value) values (%d, "_woonp_min", %s);';
        $wpdb->query($wpdb->prepare($minQuery, $postmeta_table, $id, $min));
        $maxQuery = 'insert into %i (post_id, meta_key, meta_value) values (%d, "_woonp_max", %s);';
        $wpdb->query($wpdb->prepare($maxQuery, $postmeta_table, $id, $max));
        return 'success';
    } else {
        return 'fail';
    }
}
function disableNYP($data){
    global $wpdb;
    $user = wp_get_current_user();
    $postmeta_table =  $wpdb->prefix . "postmeta";
    $id = sanitize_text_field($data['id']);
    if (is_user_logged_in() && in_array( 'dc_vendor', (array) $user->roles )){
        $deleteQuery = 'delete from %i
        where post_id = %d
        and meta_key in (%s, %s)';
        $wpdb->query($wpdb->prepare($deleteQuery, $postmeta_table, $id, "_woonp_min", "_woonp_max"));
        $updateQuery = 'update %i
        set meta_value = "default"
        where post_id = %d
        and meta_key = "_woonp_status"
        limit 1';
        $wpdb->query($wpdb->prepare($updateQuery, $postmeta_table, $id));
        return 'success';
    } else {
        return 'fail';
    }
}