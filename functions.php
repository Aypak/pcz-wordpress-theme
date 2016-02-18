<?php
function my_scripts() {
	// Enqueue scripts and stylesheets
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
	wp_register_script(
		'angular-cart',
		get_stylesheet_directory_uri() . '/bower_components/ngcart/dist/ngCart.js'
	);
	wp_register_script(
		'angular-timer',
		get_stylesheet_directory_uri() . '/bower_components/angular-timer/dist/angular-timer.js'
	);
	wp_register_script(
		'angular-truncate',
		get_stylesheet_directory_uri() . '/bower_components/angular-truncate/src/truncate.js'
	);
	wp_register_script(
		'jquery',
		get_stylesheet_directory_uri() . '/js/jquery-1.12.0.min.js'
	)
	;wp_register_script(
		'ellipsis',
		get_stylesheet_directory_uri() . '/js/jquery.autoellipsis-1.0.10.js'
	);
	wp_enqueue_script(
		'my-scripts',
		get_stylesheet_directory_uri() . '/js/app.js',
		array( 'angularjs', 'angularjs-route', 'angularjs-sanitize','ui-bootstrap','angular-cart','angular-timer','angular-truncate','jquery','ellipsis')
	);
	//Main stylesheets should be in root of theme directory
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
			//Partials directory
			'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
			)
	);
	wp_localize_script( 'wp-api', 'WP_API_Settings', array( 'root' => esc_url_raw( rest_url() ), 'nonce' => wp_create_nonce( 'wp_rest' ) ) );
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );
/*remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
function my_theme_wrapper_start() {
  echo '<div id="shop">';
}

function my_theme_wrapper_end() {
  echo '</div>';
}*/