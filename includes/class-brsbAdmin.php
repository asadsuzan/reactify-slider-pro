<?php

if ( !class_exists( 'BRSBAdmin' ) ) {
    class BRSBAdmin {
        public function __construct() {
            if (  BRSB_HAS_PRO ) {
                add_action( 'init', [ $this, 'brsbRegisterPostType' ] );
            }
            add_action( 'admin_enqueue_scripts', [ $this, 'enqueueDashboardAssetes' ] );
            add_action( 'admin_menu', [ $this, 'brsbAdminSubmenu' ] );
            add_filter( 'manage_brsb_reactify_slider_posts_columns', [ $this, 'brsb_setCustomColumn_edit' ] );
            add_action( 'manage_brsb_reactify_slider_posts_custom_column', [ $this, 'brsb_manageCustomColumn' ], 10, 2 );

        }

        public function  brsbRegisterPostType() {
            register_post_type(
                'brsb_reactify_slider',
                [
                    'label'               => 'Slider',
                    'labels'              => [
                        'add_new' => 'Add New',
                        'add_new_item' => 'Add New Slide',
                        'edit_item' => 'Edit Slide',
                        'not_found' => 'There was no slide please add one'
                    ],
                    'show_in_rest' => true,
                    'public' => true,
                    'publicly_queryable' => false,
                    'menu_icon' => 'dashicons-screenoptions',
                    'item_published' => 'Slider Block Published',
                    'item_updated' => 'Slider Block Updated',
                    'template' => [ [ 'b-reactify/slider' ] ],
                    'template_lock' => 'all',
                ]
            );
        }

        public function brsbAdminSubmenu() {
            $parent_slug = 'tools.php';

            add_submenu_page(
                brsbIsPremium() ? 'edit.php?post_type=brsb_reactify_slider' : 'tools.php',
                'Demo and Help',
                'Demo & Help',
                'manage_options',
                'demo_page',
                [ $this, 'brsb_render_demo_page' ]
            );
        }

        // pass dashboard data through inline script 

        public function enqueueDashboardAssetes() {
            $data = [
				'version' => BRSB_VERSION,
				'isPremium' => brsbIsPremium()
			];
            wp_add_inline_script(
                'bpl-admin-dashboard-js',
                'const dashboardData = ' . wp_json_encode( $data ) . ';',
                'before'
            );
        }
     // render dashboard and  pass its data through data attributes 
        public function brsb_render_demo_page() {
            ?>
            <div id = 'reactify-admin-dashboard' data-info = '<?php echo esc_attr(wp_json_encode([
				'version' => BRSB_VERSION,
				'isPremium' => brsbIsPremium()
			])); ?>'></div>
            <?php
        }

        public function brsb_setCustomColumn_edit( $column ) {
            unset( $column[ 'date' ] );
            $column[ 'shortcode' ] = 'ShortCode';
            $column[ 'date' ] = 'Date';
            $column[ 'publisher' ] = 'Publisher';
            return $column;
        }

        public function brsb_manageCustomColumn( $column_name, $post_id ) {
            if ( $column_name == 'shortcode' ) {
                echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr( $post_id ) . '">
						<input value="[brsb_reactify_slider id=' . esc_attr( $post_id ) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
            }
            if ( $column_name == 'publisher' ) {
                echo 'bPlugins';
            }
        }
    }

    new BRSBAdmin();
}

