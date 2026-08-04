# Food Radar VN 운영 가이드

## 현재 구축 상태

이 모듈은 전 세계 식품·비알코올 음료 관련 소스를 수집하여 다음 결과물을 생성합니다.

- TikTok·Facebook Reels·YouTube Shorts 공용 9:16 MP4
- 9:16 세로 카드 6장
- Facebook용 4:5 카드 6장
- 베트남어 게시 문구와 해시태그
- 사장 검토용 한국어 요약
- 원문 출처, 신뢰도, 위험 플래그, 승인 기록

기본값은 `검토 모드`이며 자동 게시 기능은 꺼져 있습니다.

## PC 최초 설치

PowerShell에서 저장소를 연 뒤 실행합니다.

```powershell
cd automation\foodworld
powershell -ExecutionPolicy Bypass -File scripts\setup_windows.ps1
winget install Gyan.FFmpeg
```

`config.example.yml`은 설치 스크립트가 `config.yml`로 복사합니다. `.env.example`도 `.env`로 복사됩니다.

`.env`에 우선 아래 값만 넣으면 콘텐츠 생성까지 작동합니다.

```env
OPENAI_API_KEY=발급받은_API_키
OPENAI_TEXT_MODEL=gpt-5-mini
FOODWORLD_APPROVAL_MODE=review
FOODWORLD_PUBLISH_ENABLED=false
```

## 콘텐츠 한 건 생성

```powershell
powershell -ExecutionPolicy Bypass -File scripts\run_windows.ps1
```

결과물은 `runtime\output\콘텐츠-slug\`에 생성됩니다.

최신 검토 페이지 열기:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\open_latest.ps1
```

검토 항목:

1. 제목과 숫자가 원문 출처와 일치하는지
2. 베트남 출시·판매 여부를 추측해서 쓰지 않았는지
3. 베트남어 문장이 자연스러운지
4. 영상과 카드의 줄바꿈이 정상인지
5. 원문 링크가 올바른지
6. 위험 플래그와 신뢰도가 적절한지

## 승인과 게시

검토가 끝난 동일 파일을 승인합니다.

```powershell
powershell -ExecutionPolicy Bypass -File scripts\approve_latest.ps1 -By "Kim"
```

승인 후 파일이 수정되면 해시가 달라져 게시할 수 없습니다. 수정본은 다시 검토하고 승인해야 합니다.

플랫폼 연동 전에는 아래 설정을 유지합니다.

```yaml
publishing:
  approval_mode: "review"
  enabled: false
  platforms:
    facebook: false
    tiktok: false
    youtube: false
```

플랫폼 계정 인증이 끝난 뒤에만 `enabled`와 필요한 플랫폼을 `true`로 바꿉니다. 게시 명령은 다음과 같습니다.

```powershell
powershell -ExecutionPolicy Bypass -File scripts\publish_latest.ps1
```

## 한국에서 찾은 주제를 직접 넣기

```powershell
Copy-Item content\manual-topic.example.json content\manual-topic.json
notepad content\manual-topic.json
powershell -ExecutionPolicy Bypass -File scripts\run_windows.ps1 -Manual content\manual-topic.json
```

원문 전체를 복사하지 말고 원문 URL, 제목, 사실 중심 요약만 입력합니다.

## 플랫폼별 추가 인증값

Facebook Reels:

```env
META_PAGE_ID=
META_PAGE_ACCESS_TOKEN=
```

TikTok은 기본적으로 크리에이터 받은편지함 업로드 모드입니다.

```env
TIKTOK_ACCESS_TOKEN=
TIKTOK_MODE=inbox
TIKTOK_DIRECT_POST_APPROVED=false
```

YouTube는 처음에는 비공개 업로드로 설정합니다.

```env
YOUTUBE_CLIENT_ID=
YOUTUBE_CLIENT_SECRET=
YOUTUBE_REFRESH_TOKEN=
```

## 첫 20개 운영 원칙

- 하루 1개만 생성
- 모든 콘텐츠를 직접 검토
- 실제 게시 후 3초 유지율, 평균 시청시간, 완주율, 저장·공유 수를 기록
- 반응이 좋은 카테고리만 하루 2~3개로 확대
- 첫 20개가 끝나기 전에는 완전 자동 게시를 켜지 않음

## PC에 연결된 Codex용 실행 지시

아래 내용을 그대로 Codex 작업으로 사용합니다.

```text
저장소 kimsuhoe01-creator/dabangzz의 agent/global-food-media-pipeline 브랜치를 체크아웃한다.
automation/foodworld/README_KO.md를 읽고 Windows PC에 모듈을 설치한다.
Python 3.11 이상, FFmpeg, 프로젝트 가상환경과 의존성을 확인한다.
config.example.yml을 config.yml로, .env.example을 .env로 복사한다.
게시 관련 값은 모두 false로 유지하며 계정 토큰을 임의로 만들거나 기록하지 않는다.
pytest를 실행하고 5개 테스트가 통과하는지 확인한다.
manual-topic.example.json으로 샘플 생성 후 video.mp4가 1080x1920 H.264, 30fps인지 ffprobe로 확인한다.
review.html을 열 수 있는 경로와 설치·테스트 결과를 보고한다.
사용자 계정의 API 키와 플랫폼 권한이 입력되기 전에는 실제 게시를 시도하지 않는다.
```
