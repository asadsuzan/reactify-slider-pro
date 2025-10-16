<?php

if (!class_exists('BRSBBlock')) {
    class BRSBBlock
    {
        public function __construct() {
            add_action('init', [$this, 'onInit']);
            add_action('enqueue_block_editor_assets', [$this, "brsbEnqueueEditorAssets"]);
            add_action('wp_enqueue_scripts', [$this, "brsbEnqueueViewAssets"]);
        }

        public function onInit()
        {
            register_block_type(__DIR__ . '/build');
            
        }

        public function brsbEnqueueEditorAssets() {
            wp_add_inline_script(
                'b-reactify-slider-editor-script',
                'const brsbIsPipeChecker = ' . wp_json_encode(brsbIsPremium()) . ';',
                'before'
            );

        }
        public function brsbEnqueueViewAssets() {
            wp_add_inline_script(
                'b-reactify-slider-view-script',
                'const brsbIsPipeChecker = ' . wp_json_encode(brsbIsPremium()) . ';',
                'before'
            );

   // Ensure a style handle exists
    wp_register_style('b-reactify-slider-view-style', false);
    wp_enqueue_style('b-reactify-slider-view-style');
              // ✅ Add inline CSS here
    $custom_css = "
        .brsb-premium-slider-wrapper {
            position: relative;
            overflow: hidden;
        }
        .brsb-premium-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(2px);
            z-index: 10;
            transition: opacity 0.3s ease;
        }
        .brsb-premium-overlay-content {
            text-align: center;
            color: #fff;
        }
        .brsb-upgrade-btn {
            display: inline-block;
            margin-top: 10px;
            background: #e63946;
            color: #fff;
            padding: 10px 18px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
        }
        .brsb-upgrade-btn:hover {
            background: #d62828;
        }
    ";

    // Attach CSS to a registered handle (use your view script handle)
    wp_add_inline_style('b-reactify-slider-view-style', $custom_css);

        }
    }

    new BRSBBlock();
}