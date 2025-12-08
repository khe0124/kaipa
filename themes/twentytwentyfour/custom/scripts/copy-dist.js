const fs = require('fs');
const path = require('path');

// 경로 설정
const sourceDir = path.join(__dirname, '../dist');
const targetDir = path.join(__dirname, '../../../twentytwentyfour-child/dist');

// 디렉토리 복사 함수
function copyDirectory(src, dest) {
  // 대상 디렉토리가 없으면 생성
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // 소스 디렉토리의 모든 항목 읽기
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // 디렉토리인 경우 재귀적으로 복사
      copyDirectory(srcPath, destPath);
    } else {
      // 파일인 경우 복사
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied: ${entry.name}`);
    }
  }
}

// 메인 실행
try {
  console.log('📦 Copying dist folder...');
  console.log(`Source: ${sourceDir}`);
  console.log(`Target: ${targetDir}\n`);

  // 소스 디렉토리 확인
  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Error: Source directory does not exist: ${sourceDir}`);
    console.error('Please run "npm run build" first.');
    process.exit(1);
  }

  // 기존 대상 디렉토리 삭제 (있는 경우)
  if (fs.existsSync(targetDir)) {
    console.log('🗑️  Removing existing dist folder...');
    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  // 디렉토리 복사
  copyDirectory(sourceDir, targetDir);

  console.log('\n✅ Successfully copied dist folder to twentytwentyfour-child!');
} catch (error) {
  console.error('❌ Error copying dist folder:', error.message);
  process.exit(1);
}

