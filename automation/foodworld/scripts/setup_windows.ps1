$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

if (-not (Get-Command py -ErrorAction SilentlyContinue)) {
    throw "Python Launcher(py)가 없습니다. Python 3.11 이상을 설치한 뒤 다시 실행하세요."
}

py -3 -m venv .venv
& .\.venv\Scripts\python.exe -m pip install --upgrade pip
& .\.venv\Scripts\python.exe -m pip install -e ".[dev]"

if (-not (Test-Path config.yml)) {
    Copy-Item config.example.yml config.yml
}
if (-not (Test-Path .env)) {
    Copy-Item .env.example .env
}

Write-Host "설치 완료. .env에 API 키를 입력하고 scripts\\run_windows.ps1을 실행하세요."
