# 족발신선생 박닌점 Facebook 사진 게시 Worker

이 Worker는 기존 Dabangzz → Kim Bắc Ninh 자동 공유와 완전히 분리되어 있다. 기존
META_* 변수와 예약 게시 코드는 사용하거나 변경하지 않는다. 실제 게시 기능은 기본값이
꺼져 있으며, 족발 페이지 전용 자격증명과 최종 승인 서명이 모두 있어야만 동작한다.

## 안전 구조

- 별도 Worker: joksin-bacninh-facebook-publisher
- 전용 비밀값만 사용: JOKSIN_* (기존 META_* 재사용 금지)
- JPEG/PNG만 허용하며 MIME, 파일 시그니처, 8 MiB 제한을 함께 검사
- dry-run은 Meta API를 호출하지 않고 이미지 해시와 승인 대상을 반환
- 최종 승인 서명은 이미지 해시, 두 언어 문구, Idempotency-Key 전체에 결합
- Durable Object가 Idempotency-Key를 원자적으로 선점해 중복 게시 방지
- Meta 토큰은 Authorization 헤더로만 전달하며 URL, 응답, 로그에 넣지 않음
- 공개 시험 게시물을 만들지 않고 /v1/meta/verify로 읽기 전용 검증 가능

## 엔드포인트

### GET /health

인증 없이 잠금 상태만 확인한다. 비밀값, Page ID, 토큰은 노출하지 않는다.

### GET /v1/meta/verify

Bearer API 키가 필요하다. 설정한 Page ID를 Meta 공식 응답의 id, name, link와
대조한다. 실제 게시물은 만들지 않는다.

### POST /v1/photos/dry-run

다음 헤더와 multipart 필드를 보낸다.

    Authorization: Bearer <JOKSIN_PUBLISH_API_KEY>
    Idempotency-Key: <16~128자 고유값>

    image: JPEG 또는 PNG 파일
    captionKo: 최종 한국어 문구
    captionVi: 최종 베트남어 문구

응답의 approvalPayload와 image.sha256을 사용자가 확인한다. 이 단계에서는 절대
Meta 게시 요청을 보내지 않는다.

### POST /v1/photos/publish

dry-run과 동일한 본문 및 Idempotency-Key를 다시 보내고, 최종 승인 후 로컬에서 만든
HMAC-SHA256 서명을 X-Joksin-Approval-Signature 헤더에 추가한다. 사진이나 문구가
한 글자라도 바뀌면 서명이 무효가 된다.

Codex 작업에서는 사용자가 최종 문구와 사진을 승인한 뒤에만
createApprovalSignature 함수를 사용해 서명을 만들고 이 엔드포인트를 호출한다.

## Cloudflare 비밀값

저장소나 설정 파일에 값을 기록하지 말고 각각 wrangler secret put으로 입력한다.

    JOKSIN_PUBLISH_API_KEY
    JOKSIN_META_PAGE_ACCESS_TOKEN
    JOKSIN_META_PAGE_ID

실제 Page ID와 전용 Page 토큰을 공식 API로 확인한 뒤에만
JOKSIN_FACEBOOK_PUBLISH_ENABLED를 true로 바꾸고 배포한다. 그전에는 false를 유지한다.

필요한 Meta 권한은 pages_show_list, pages_read_engagement,
pages_manage_posts이다. pages_manage_posts는 Page 게시물, 사진, 동영상을
생성·수정·삭제하는 권한이며 pages_show_list와 pages_read_engagement가 함께 필요하다.

## 배포 전 체크

1. /me/accounts?fields=id,name,tasks에서 대상 페이지가 보이는지 확인한다.
2. 후보 번호를 추측하지 말고 반환된 정확한 Page ID만 사용한다.
3. /v1/meta/verify에서 페이지 이름과 링크가 일치하는지 확인한다.
4. /health에서 idempotencyConfigured가 true인지 확인한다.
5. 사진과 두 언어 문구를 사용자가 최종 승인한다.
6. dry-run 결과와 실제 승인 서명 대상을 다시 대조한다.
7. 최초 실제 게시도 중복되지 않는 새 Idempotency-Key로 한 번만 호출한다.

공식 문서:

- https://developers.facebook.com/docs/permissions/reference/pages_manage_posts/
- https://developers.facebook.com/docs/graph-api/reference/page/photos/

## 브라우저 검증 콘솔

Worker 루트 URL은 실제 게시 버튼 없이 Meta 페이지 검증과 사진 dry-run만 제공한다.
API 키는 HTTPS 요청 본문으로 전송되며 URL이나 저장소에 기록하지 않는다. 실제 게시에는
계속해서 `Authorization: Bearer`, `Idempotency-Key`, `X-Joksin-Approval-Signature`가 모두
필요하다.

- 콘솔: `https://joksin-bacninh-facebook-publisher.kimsuhoe01.workers.dev/`
- 검증된 페이지: `족발신선생 박닌점 joksin.bacninh`
- Graph Page ID: `1247767008416790`
