param(
    [switch]$Publish,
    [string]$Manual = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent
Set-Location $Root

if (-not (Test-Path .venv\Scripts\python.exe)) {
    throw "가상환경이 없습니다. scripts\\setup_windows.ps1을 먼저 실행하세요."
}
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    throw "FFmpeg가 PATH에 없습니다. winget install Gyan.FFmpeg 후 새 터미널에서 다시 실행하세요."
}
if (Test-Path .env) {
    Get-Content .env | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]*)=(.*)$') {
            [Environment]::SetEnvironmentVariable($matches[1].Trim(), $matches[2].Trim(), 'Process')
        }
    }
}

$ArgsList = @("-m", "foodworld", "--config", "config.yml")
if ($Manual) {
    $ArgsList += @("manual", $Manual)
} else {
    $ArgsList += "generate"
}
if ($Publish) { $ArgsList += "--publish" }

& .\.venv\Scripts\python.exe @ArgsList
