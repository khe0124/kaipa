<?php
function mytheme_enqueue_assets() {
  $theme_dir = get_template_directory();
  $theme_uri = get_template_directory_uri();
  $manifest_path = $theme_dir . '/dist/manifest.json';

  if (!file_exists($manifest_path)) return;

  $manifest = json_decode(file_get_contents($manifest_path), true);
  $entry = $manifest['src/main.js'];

  // CSS 로드
  if (isset($entry['css'])) {
    foreach ($entry['css'] as $css_file) {
      wp_enqueue_style('mytheme-style', $theme_uri . '/dist/' . $css_file, [], null);
    }
  }

  // JS 로드
  wp_enqueue_script('mytheme-script', $theme_uri . '/dist/' . $entry['file'], [], null, true);
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_assets');
