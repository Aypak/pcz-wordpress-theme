<?php
function my_scripts() {
	wp_register_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.js'
	);
	wp_register_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/bower_components/angular-route/angular-route.js'
	);
	wp_register_script(
		'angularjs-sanitize',
		get_stylesheet_directory_uri() . '/bower_components/angular-sanitize/angular-sanitize.js'
	);
	wp_register_script(
		'ui-bootstrap',
		get_stylesheet_directory_uri() . '/js/ui-bootstrap-tpls-0.10.0.min.js'
	);
	wp_enqueue_script(
		'my-scripts',
		get_stylesheet_directory_uri() . '/js/app.js',
		array( 'angularjs', 'angularjs-route', 'angularjs-sanitize','ui-bootstrap' )
	);
	wp_enqueue_style(
		'my-styles',
		get_stylesheet_directory_uri() . '/style.css'
	);	
	wp_enqueue_style(
		'my-fonts',
		get_stylesheet_directory_uri() . '/css/font-awesome.min.css'
	);	
	wp_enqueue_style(
		'bootstrap-css',
		get_stylesheet_directory_uri() . '/css/bootstrap.min.css'
	);
	wp_localize_script(
		'my-scripts',
		'myLocalized',
		array(
			'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
			)
	);
	wp_localize_script( 'wp-api', 'WP_API_Settings', array( 'root' => esc_url_raw( rest_url() ), 'nonce' => wp_create_nonce( 'wp_rest' ) ) );
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );