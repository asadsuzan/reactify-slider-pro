<?php

iF( !class_exists( 'BRSBPlugin' ) ) {
    class BRSBPlugin {
        public function __construct() {
            add_action( 'plugins_loaded', [ $this, 'load_dependencies' ] );
            add_action( 'admin_enqueue_scripts', [ $this, 'brsbAdminScripts' ] );
            add_shortcode( 'brsb_reactify_slider', [ $this, 'reactifySliderShortcode' ] );
            
        }

        public function load_dependencies() {
            require_once BRSB_DIR_PATH . 'includes/functions.php';
            require_once BRSB_DIR_PATH . 'reactify-slider-block.php';
            require_once BRSB_DIR_PATH . 'includes/class-brsbAdmin.php';

        }

        public function brsbAdminScripts($screen): void {
            global $typenow;

           
            if('brsb_reactify_slider'==$typenow || 'tools_page_demo_page' == $screen ){
                wp_enqueue_script( 'admin-post-js', BRSB_DIR_URL . 'build/admin-post.js', [], BRSB_VERSION, true );
                wp_enqueue_style( 'admin-post-css', BRSB_DIR_URL . 'build/admin-post.css', [], BRSB_VERSION );

                wp_enqueue_script( 'bpl-admin-dashboard-js', BRSB_DIR_URL . 'build/admin-dashboard.js', [ 'react', 'react-dom' ], BRSB_VERSION, true );
                wp_enqueue_style( 'bpl-admin-dashboard-css', BRSB_DIR_URL . 'build/admin-dashboard.css', [], BRSB_VERSION );

            }

             

            
        }

    public function reactifySliderShortcode( $atts ) {
    if ( isset( $atts['id'] ) ) {
        $post = get_post( $atts['id'] );

        if ( $post ) {
            $blocks = parse_blocks( $post->post_content );

            foreach ( $blocks as $block ) {
                if ( $block['blockName'] === 'b-reactify/slider' ) {

                    $isProActive = BRSB_HAS_PRO ? rs_fs()->can_use_premium_code() : false;

                    if ( $isProActive ) {
                        return render_block( $block );
                    } else {
                        $sliderHTML = render_block( $block );

                        // Custom overlay HTML
                        $overlayHTML = '
                        <div class="brsb-premium-overlay">
                            <div class="brsb-premium-overlay-content">
                                <p>⚠️ This shortcode is available only in the Pro version.</p>
                                <a href="' . esc_url( admin_url('edit.php?post_type=brsb_reactify_slider&page=reactify-slider-account') ) . '" class="brsb-upgrade-btn">Upgrade to Pro</a>
                            </div>
                        </div>';

                        return '
                        <div class="brsb-premium-slider-wrapper" style="position:relative;">
                            ' . $sliderHTML . '
                            ' . $overlayHTML . '
                        </div>';
                    }
                }
            }
        } else {
            return 'Post not found or invalid post type.';
        }
    }
}


    }

}


