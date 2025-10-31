<?php

function custom_theme_is_dev_mode(): bool {
    if ( isset($_GET['viteDev']) && $_GET['viteDev'] === '1' ) {
        return true;
    }
    if ( defined('VITE_DEV') && constant('VITE_DEV') ) {
        return true;
    }
    if ( function_exists('wp_get_environment_type') && wp_get_environment_type() === 'development' ) {
        return true;
    }
    if ( defined('WP_DEBUG') && WP_DEBUG ) {
        return true;
    }
    return false;
}

function custom_theme_enqueue_assets() {
    $theme_dir = get_stylesheet_directory();
    $theme_uri = get_stylesheet_directory_uri();

    // $is_dev = custom_theme_is_dev_mode();
    $is_dev = true;
    if ($is_dev) {
        // 브라우저 기준: localhost 사용 (Vite root=src)
        // @vite/client는 반드시 head에서 먼저 로드되어야 함
        wp_enqueue_script('vite-client', 'http://localhost:5173/@vite/client', [], null, false);
        if ( function_exists('wp_script_add_data') ) {
            wp_script_add_data('vite-client', 'type', 'module');
        }
        // plugin-react가 요구하는 preamble 플래그 주입 (Fast Refresh 비활성화 시에도 필요할 수 있음)
        wp_add_inline_script('vite-client', 'window.__vite_plugin_react_preamble_installed__ = true;', 'after');
        // 스타일은 별도 링크로 주입
        wp_enqueue_style('custom-dev-style', 'http://localhost:5173/style.css', [], null);
        // 엔트리를 별도 모듈 스크립트로 주입
        // 엔트리는 footer에서 로드 (head의 preamble 이후 실행)
        wp_enqueue_script('custom-vite-entry', 'http://localhost:5173/main.jsx', [], null, true);
        if ( function_exists('wp_script_add_data') ) {
            wp_script_add_data('custom-vite-entry', 'type', 'module');
        }
        return;
    }

    $manifest_path = $theme_dir . '/dist/manifest.json';
    if (!file_exists($manifest_path)) {
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);

    if (isset($manifest['src/style.css'])) {
        wp_enqueue_style(
            'custom-style',
            $theme_uri . '/dist/' . $manifest['src/style.css']['file'],
            [],
            null
        );
    }

    if (isset($manifest['src/main.jsx'])) {
        $entry = $manifest['src/main.jsx'];
        if (!empty($entry['css'])) {
            foreach ($entry['css'] as $css_file) {
                wp_enqueue_style('custom-style-entry', $theme_uri . '/dist/' . $css_file, [], null);
            }
        }
        wp_enqueue_script('custom-main', $theme_uri . '/dist/' . $entry['file'], [], null, true);
    }
}
add_action('wp_enqueue_scripts', 'custom_theme_enqueue_assets');

// 워드프레스가 type="module"을 누락/변경하는 환경 대비: 핸들 강제 모듈 처리
add_filter('script_loader_tag', function($tag, $handle) {
    $module_handles = ['vite-client', 'custom-vite-entry'];
    if (in_array($handle, $module_handles, true)) {
        // 기존 type 속성 유무와 관계없이 module로 강제
        if (strpos($tag, 'type=') === false) {
            $tag = str_replace('<script ', '<script type="module" ', $tag);
        } else {
            $tag = preg_replace('/type=("|\')([^"\']*)("|\')/i', 'type="$2"', $tag); // no-op placeholder
            $tag = preg_replace('/type=("|\')[^"\']+("|\')/i', 'type="module"', $tag);
        }
        // crossorigin 기본 추가
        if (strpos($tag, 'crossorigin=') === false) {
            $tag = str_replace('<script ', '<script crossorigin="anonymous" ', $tag);
        }
    }
    return $tag;
}, 10, 2);
