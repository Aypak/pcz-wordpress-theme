<!DOCTYPE html>
<html ng-app="app">
<head>
	<base href="<?php $url_info = parse_url( site_url() ); echo trailingslashit( $url_info['path'] ); ?>">
	<title>Project chess zambia</title>
	<!--link href="<?php echo get_template_directory_uri(); ?>/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/font-awesome.min.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/style.css" rel="stylesheet">
	<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular/angular.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular-route/angular-route.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular-sanitize/angular-sanitize.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/ui-bootstrap-tpls-0.10.0.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/app.js"></script!-->
	<?php wp_head(); ?>
</head>
<body>
	<div id="main_content" class="container">
		<header></header>
		<!-- <div ng-view></div> -->
	<footer>
		&copy; <?php echo date( 'Y' ); ?>
	</footer>
	<?php wp_footer(); ?>
	</div>
</body>
</html>