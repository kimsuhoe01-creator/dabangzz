$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent
$OutputRoot = Join-Path $Root "runtime\output"
$Review = Get-ChildItem -Path $OutputRoot -Filter review.html -Recurse -File |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
if (-not $Review) { throw "검토할 review.html이 없습니다. 먼저 콘텐츠를 생성하세요." }
Start-Process $Review.FullName
Write-Host "검토 페이지 열기: $($Review.FullName)"
