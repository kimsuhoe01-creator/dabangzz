# Bắc Ninh Note

운영 사이트 `https://bacninh-note.com`의 소스 저장소다. 베트남어 뉴스 설명과 Kim의 직접 경험 리뷰를 제공하며, 미래의 별도 **Dabangzz** 프로젝트와는 콘텐츠·브랜드·배포 대상을 공유하지 않는다.

## 로컬 실행

필수 환경은 Node.js 22.13 이상이다.

```bash
npm install
npm run dev
```

검증 명령은 다음과 같다.

```bash
npm run build
npm test
npm run lint
```

## 주요 경로

- `app/`: 페이지, 컴포넌트, 게시글 데이터
- `public/`: 운영 이미지와 정적 파일
- `worker/index.ts`: Cloudflare Worker 진입점과 예약 작업 연결
- `worker/facebook-publisher.ts`: Bắc Ninh Note 게시글의 Facebook 공유 자동화
- `tests/`: 렌더링, AdSense 준비 상태, Facebook 발행 회귀 테스트
- `EDITORIAL_SCHEDULE.md`: 편집·발행 운영 기준

## 배포

- 정식 도메인: `https://bacninh-note.com`
- 배포 소스: GitHub `main`
- 현재 GitHub 저장소명과 Cloudflare Worker명에는 과거 식별자 `dabangzz`가 남아 있다. 이는 운영 연결을 끊지 않기 위한 임시 상태이며, 미래의 Dabangzz 프로젝트로 재사용하지 않는다.
- 저장소 또는 Worker 이름을 변경할 때는 GitHub 원격 주소, Cloudflare Workers Builds 연결, 사용자 지정 도메인, 예약 트리거를 한 번에 점검한다.

## 운영 환경 변수

Facebook 자동 공유는 Cloudflare 환경의 `META_*` 값과 예약 트리거를 사용한다. 실제 토큰이나 식별자 값은 저장소에 커밋하지 않는다.

Joksin Facebook Worker는 `worker/joksin-facebook-worker.ts`와 `wrangler.joksin.jsonc`에 별도로 정의되어 있으며 Bắc Ninh Note 발행 Worker와 분리되어 있다.

## 프로젝트 분리 원칙

- 이 저장소에는 Bắc Ninh Note 자료만 유지한다.
- 새 Dabangzz 사이트의 소스, 이미지, 자동화, 분석 설정은 새 저장소와 새 배포 프로젝트에서 관리한다.
- YouTube 음악·영상 원본과 전용 도구를 이 저장소에 다시 넣지 않는다.
- OpenAI Sites/D1 스타터 파일은 현재 Cloudflare 운영에 사용하지 않으므로 제거했다.
