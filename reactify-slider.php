<?php
/**
* Plugin Name: Reactify slider
* Description: Short description of the plugin
* Version: 1.0.0
* Author: bPlugins
* Author URI: https://bplugins.com
* License: GPLv3
* License URI: https://www.gnu.org/licenses/gpl-3.0.txt
* Text Domain: b-reactify
* @fs_premium_only /vendor/freemius
* @fs_free_only /vendor/freemius-lite
*/

// ABS PATH
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( function_exists( 'rs_fs' ) ) {
    rs_fs()->set_basename( true, __FILE__ );
} else {
    // Constant
    define( 'BRSB_VERSION', isset( $_SERVER[ 'HTTP_HOST' ] ) && 'localhost' === $_SERVER[ 'HTTP_HOST' ] ? time() : '1.0.0' );
    define( 'BRSB_DIR_URL', plugin_dir_url( __FILE__ ) );
    define( 'BRSB_DIR_PATH', plugin_dir_path( __FILE__ ) );
    define( 'BRSB_HAS_PRO', ( plugin_basename( __FILE__ ) === 'reactify-slider-pro/reactify-slider.php' ) );

    if ( ! function_exists( 'rs_fs' ) ) {

        function rs_fs() {
            global $rs_fs;

            if ( ! isset( $rs_fs ) ) {
                $fsLitePath = BRSB_DIR_PATH . 'vendor/freemius-lite/start.php';
                $fsPath = BRSB_DIR_PATH . 'vendor/freemius/start.php';
                if ( BRSB_HAS_PRO && ( file_exists( $fsPath ) ) ) {
                    require_once $fsPath;
                } else {
                    require_once $fsLitePath;
                }

                $config =  array(
                    'id'                  => '21097',
                    'slug'                => 'reactify-slider',
                    'premium_slug'        => 'reactify-slider-pro',
                    'type'                => 'plugin',
                    'public_key'          => 'pk_380e560d47f46928bcfe3cd29bb19',
                    'is_premium'          => true,
                    'premium_suffix'      => 'pro',
                    'has_premium_version' => true,
                    'has_addons'          => false,
                    'has_paid_plans'      => true,
                    'wp_org_gatekeeper'   => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
                    'trial'               => array(
                        'days'               => 4,
                        'is_require_payment' => false,
                    ),

                    'menu' => BRSB_HAS_PRO ? array(
                        'slug' => 'edit.php?post_type=brsb_reactify_slider',
                        'first-path' => 'edit.php?post_type=brsb_reactify_slider&page=demo_page#/welcome',
                    ) : array(
                        'slug' => 'demo_page',
                        'first-path' => 'tools.php?page=demo_page#/welcome',
                        'parent' => array(
                            'slug' => 'tools.php',
                        ),
                    ),
                ) ;

                $rs_fs = BRSB_HAS_PRO && file_exists( $fsPath ) ? fs_dynamic_init( $config ) : fs_lite_dynamic_init( $config );

            }

            return $rs_fs;
        }

        // Init Freemius.
        rs_fs();
        do_action( 'rs_fs_loaded' );
 }

    // ... Your plugin's main file logic ...
	require_once BRSB_DIR_PATH . "includes/class-brsbPlugin.php";
	new BRSBPlugin;
}