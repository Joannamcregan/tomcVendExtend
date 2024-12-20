<?php

add_action('rest_api_init', 'tomcMVXtendIsbnRegisterRoute');

function tomcMVXtendIsbnRegisterRoute() {
    register_rest_route('tomcMVXtend/v1', 'checkIfAssigned', array(
        'methods' => 'GET',
        'callback' => 'checkIfAssigned'
    ));
}

function checkIfAssigned($data){
    $ISBNEntered = sanitize_text_field($data['ISBNEntered']);
    $user = wp_get_current_user();
    if (is_user_logged_in() && (in_array( 'administrator', (array) $user->roles ) )){
        $userId = get_current_user_id();
        global $wpdb;
        $isbn_numbers_table = $wpdb->prefix . "tomc_isbn_numbers";
        $query = 'select assignedproductid from %i where isbn = %d';
        $results = $wpdb->get_results($wpdb->prepare($query, $isbn_numbers_table, $ISBNEntered), ARRAY_A);
        if (($results) && count($results) > 0){
            return $results[0]['assignedproductid'];
        } else {
            return 0;
        }
    } else {
        wp_safe_redirect(site_url('/my-account'));
        return 'fail';
    }
}