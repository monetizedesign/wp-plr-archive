<?php

// Image Uploader
function wpoptinlock_admin_scripts() {
	wp_enqueue_script('media-upload');
	wp_enqueue_script('thickbox');
	// wp_register_script(array('jquery','media-upload','thickbox'));
}

function wpoptinlock_admin_styles() {
	wp_enqueue_style('thickbox');
}

add_action('admin_print_scripts', 'wpoptinlock_admin_scripts');
add_action('admin_print_styles', 'wpoptinlock_admin_styles');


?>