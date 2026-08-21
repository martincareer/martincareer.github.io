const fs = require('fs');
const path = require('path');
const {
  ROOT,
  readYaml,
  readFileContent,
  parseFrontMatter,
  globFiles,
} = require('./utils');

// 이 저장소의 26개 마크다운 페이지 전체 (index.md + 카테고리 인덱스 3개 + 프로젝트 22개).
// career_*.md / 경력기술서_*.md 는 .gitignore 처리된 비공개 원천 문서라 제외한다.
function allPageFiles() {
  return globFiles('.', (rel) => {
    if (!rel.endsWith('.md')) return false;
    if (rel.startsWith('career_') || rel.startsWith('경력기술서_')) return false;
    if (rel.startsWith('node_modules' + path.sep)) return false;
    if (rel.startsWith('vendor' + path.sep)) return false;
    if (rel.startsWith('_site' + path.sep)) return false;
    if (rel.startsWith('.superpowers' + path.sep)) return false;
    return true;
  });
}

describe('페이지 레이아웃 이관 (single → page)', () => {
  test('26개의 마크다운 페이지가 존재한다', () => {
    expect(allPageFiles()).toHaveLength(26);
  });

  test('어떤 페이지도 layout: single을 쓰지 않는다', () => {
    allPageFiles().forEach((f) => {
      const src = readFileContent(f);
      expect(src).not.toMatch(/^layout:\s*single\s*$/m);
    });
  });

  test('모든 페이지가 layout: page로 해석된다', () => {
    allPageFiles().forEach((f) => {
      const { data } = parseFrontMatter(readFileContent(f));
      expect(data.layout).toBe('page');
    });
  });

  test('_config.yml의 pages 기본 레이아웃이 page이다', () => {
    const cfg = readYaml('_config.yml');
    const d = cfg.defaults.find((x) => x.scope.type === 'pages');
    expect(d.values.layout).toBe('page');
  });
});

describe('셸 레이아웃', () => {
  test('default 레이아웃이 헤더·레일·main·footer를 포함한다', () => {
    const html = readFileContent('_layouts/default.html');
    expect(html).toMatch(/include site-header\.html/);
    expect(html).toMatch(/include contents-rail\.html/);
    expect(html).toMatch(/id="main"/);
    expect(html).toMatch(/include footer\.html/);
  });

  test('검색 오버레이를 포함하지 않는다 (포스트/검색이 없는 사이트)', () => {
    const html = readFileContent('_layouts/default.html');
    expect(html).not.toMatch(/search-overlay/);
    const header = readFileContent('_includes/site-header.html');
    expect(header).not.toMatch(/search-overlay/);
  });

  test('검색 관련 파일을 이관하지 않았다', () => {
    expect(fs.existsSync(path.join(ROOT, '_includes/search-overlay.html'))).toBe(false);
    expect(fs.existsSync(path.join(ROOT, 'assets/js/search.js'))).toBe(false);
    expect(fs.existsSync(path.join(ROOT, 'assets/js/search-match.js'))).toBe(false);
    expect(fs.existsSync(path.join(ROOT, '_plugins/search_index.rb'))).toBe(false);
  });

  test('post.html / home.html 레이아웃을 이관하지 않았다 (포스트가 없는 사이트)', () => {
    expect(fs.existsSync(path.join(ROOT, '_layouts/post.html'))).toBe(false);
    expect(fs.existsSync(path.join(ROOT, '_layouts/home.html'))).toBe(false);
  });
});

describe('레일: 저자 사진 제거, 프로젝트 카테고리 내비', () => {
  test('레일에 site.author.avatar 참조가 없다 (사진은 히어로로 이동)', () => {
    const html = readFileContent('_includes/contents-rail.html');
    expect(html).not.toMatch(/site\.author\.avatar/);
  });

  test('레일에 rail-avatar 클래스가 없다', () => {
    const html = readFileContent('_includes/contents-rail.html');
    expect(html).not.toMatch(/rail-avatar/);
  });

  test('레일에 저자 블록(rail-author)이 없다', () => {
    const html = readFileContent('_includes/contents-rail.html');
    expect(html).not.toMatch(/rail-author/);
  });

  test('레일이 목차(rail-toc)와 카테고리 내비(rail-nav)는 유지한다', () => {
    const html = readFileContent('_includes/contents-rail.html');
    expect(html).toMatch(/id="rail-toc"/);
    expect(html).toMatch(/id="rail-nav"/);
    expect(html).toMatch(/site\.data\.categories/);
  });

  test('레일 접기 토글(테마 버튼 포함)이 유지된다', () => {
    const html = readFileContent('_includes/contents-rail.html');
    expect(html).toMatch(/theme-toggle/);
  });

  test('_data/categories.yml이 이 사이트의 3개 프로젝트 카테고리다', () => {
    const cats = readYaml('_data/categories.yml');
    expect(cats).toHaveLength(3);
    const urls = cats.map((c) => c.url);
    expect(urls).toContain('/projects/solutions-architect/');
    expect(urls).toContain('/projects/fullstack-developer/');
    expect(urls).toContain('/projects/student-intern/');
  });
});

describe('색상 규칙: _tokens.scss가 색을 정의하는 유일한 곳이다', () => {
  const ROUGE_BLOCK =
    /\/\* ROUGE-EXCEPTION-START[\s\S]*?ROUGE-EXCEPTION-END \*\//;
  const stripRouge = (src) => src.replace(ROUGE_BLOCK, '');

  function scssAndJsFiles() {
    const scss = globFiles('_sass', (f) => f.endsWith('.scss'));
    const mainScss = ['assets/css/main.scss'];
    return [...scss, ...mainScss];
  }

  test('_tokens.scss 외의 모든 스타일 파일에 hex 리터럴이 없다 (rouge 예외 제외)', () => {
    scssAndJsFiles()
      .filter((f) => !f.endsWith('_tokens.scss'))
      .forEach((f) => {
        const hex = stripRouge(readFileContent(f)).match(/#[0-9a-fA-F]{3,8}\b/g) || [];
        expect({ file: f, hex }).toEqual({ file: f, hex: [] });
      });
  });

  test('_tokens.scss 외의 모든 스타일 파일에 리터럴 rgb()/rgba()/hsl() 값이 없다 (토큰 참조만 허용)', () => {
    scssAndJsFiles()
      .filter((f) => !f.endsWith('_tokens.scss'))
      .forEach((f) => {
        const literal = stripRouge(readFileContent(f)).match(/\brgba?\(\s*[\d.]|\bhsla?\(/g) || [];
        expect({ file: f, literal }).toEqual({ file: f, literal: [] });
      });
  });

  test('assets/js의 어떤 파일도 rgb(var(--…)) 문자열을 쓰지 않는다 (CSS 커스텀 프로퍼티는 JS에서 해석되지 않는다)', () => {
    const jsFiles = globFiles('assets/js', (f) => f.endsWith('.js'));
    expect(jsFiles.length).toBeGreaterThan(0);
    jsFiles.forEach((f) => {
      expect(readFileContent(f)).not.toMatch(/rgba?\(\s*var\(--/);
    });
  });

  test('$primary-color(페리윙클 하드코딩)가 더 이상 존재하지 않는다', () => {
    expect(readFileContent('assets/css/main.scss')).not.toMatch(/primary-color/);
  });
});

describe('뒤로가기 버튼: 새 셸의 .page-title 클래스에 맞춘다', () => {
  test('back-button.js가 .page-title을 참조한다 (.page__title 테마 잔재가 아니다)', () => {
    const js = readFileContent('assets/js/back-button.js');
    expect(js).toMatch(/\.page-title/);
    expect(js).not.toMatch(/\.page__title/);
  });

  test('page.html이 .page-title 클래스를 렌더링한다', () => {
    const html = readFileContent('_layouts/page.html');
    expect(html).toMatch(/class="page-title"/);
  });
});

describe('테마 토큰 포팅', () => {
  const tokens = () => readFileContent('_sass/custom/_tokens.scss');

  test('라이트 토큰을 :root에 정의한다', () => {
    expect(tokens()).toMatch(/:root\s*\{[^}]*--accent:\s*0 102 204/s);
  });

  test('OS 다크 선호를 자동으로 따르지 않는다 (기본은 항상 라이트)', () => {
    expect(tokens()).not.toMatch(/@media \(prefers-color-scheme: dark\)/);
  });

  test('명시적 data-theme 오버라이드를 지원한다', () => {
    expect(tokens()).toMatch(/\[data-theme="dark"\]/);
    expect(tokens()).toMatch(/\[data-theme="light"\]/);
  });

  test('레거시 html.dark-mode 클래스 방식이 남아있지 않다', () => {
    const files = [
      'assets/css/main.scss',
      'assets/js/theme-toggle.js',
      '_includes/head/custom.html',
    ];
    files.forEach((f) => expect(readFileContent(f)).not.toMatch(/dark-mode/));
  });

  test('body가 토큰에서 배경·글자색을 가져온다', () => {
    const base = readFileContent('_sass/custom/_base.scss');
    expect(base).toMatch(/body\s*\{[^}]*background-color:\s*rgb\(var\(--bg\)\)/s);
    expect(base).toMatch(/body\s*\{[^}]*color:\s*rgb\(var\(--fg\)\)/s);
  });
});

describe('after_footer_scripts: 셸 스크립트가 로드된다', () => {
  test('theme-toggle.js와 contents-rail.js가 after_footer_scripts에 있다', () => {
    const cfg = readYaml('_config.yml');
    const scripts = cfg.after_footer_scripts || [];
    expect(scripts).toContain('/assets/js/theme-toggle.js');
    expect(scripts).toContain('/assets/js/contents-rail.js');
  });
});
