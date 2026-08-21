const { readFileContent, parseFrontMatter } = require('./utils');

describe('홈 히어로', () => {
  test('page.html이 히어로 섹션을 정의한다', () => {
    const html = readFileContent('_layouts/page.html');
    expect(html).toMatch(/class="hero"/);
  });

  test('히어로가 루트 페이지(page.url == "/")에서만 렌더링되도록 조건부로 감싸져 있다', () => {
    const html = readFileContent('_layouts/page.html');
    const heroIdx = html.indexOf('class="hero"');
    expect(heroIdx).toBeGreaterThan(-1);
    const before = html.slice(0, heroIdx);
    const lastIf = before.lastIndexOf('{%');
    expect(before.slice(lastIf)).toMatch(/page\.url\s*==\s*["']\/["']/);
  });

  test('히어로가 site.author.avatar / name / bio를 참조한다', () => {
    const html = readFileContent('_layouts/page.html');
    const heroIdx = html.indexOf('class="hero"');
    const heroBlock = html.slice(heroIdx, heroIdx + 2000);
    expect(heroBlock).toMatch(/site\.author\.avatar/);
    expect(heroBlock).toMatch(/site\.author\.name/);
  });

  test('히어로가 site.author.links를 렌더링한다', () => {
    const html = readFileContent('_layouts/page.html');
    const heroIdx = html.indexOf('class="hero"');
    const heroBlock = html.slice(heroIdx, heroIdx + 2000);
    expect(heroBlock).toMatch(/site\.author\.links/);
  });

  test('index.md가 히어로에 필요한 프론트매터(tagline / current_role / headline_skills)를 갖는다', () => {
    const { data } = parseFrontMatter(readFileContent('index.md'));
    expect(typeof data.tagline).toBe('string');
    expect(data.tagline.length).toBeGreaterThan(0);
    expect(typeof data.current_role).toBe('string');
    expect(Array.isArray(data.headline_skills)).toBe(true);
    expect(data.headline_skills.length).toBeGreaterThan(0);
  });

  test('index.md의 About Me 본문이 히어로와 중복되는 태그라인 문장을 반복하지 않는다', () => {
    const { data, content } = parseFrontMatter(readFileContent('index.md'));
    expect(content).not.toContain(data.tagline);
  });
});
