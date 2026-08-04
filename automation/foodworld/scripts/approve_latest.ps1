param(
    [string]$By = "Kim",
    [string]$Note = "",
    [switch]$AllowRisk
)

$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent
Set-Location $Root
$Package = Get-ChildItem -Path "runtime\output" -Filter story.json -Recurse -File |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
if (-not $Package) { throw "승인할 패키지가 없습니다." }

$ArgsList = @("-m", "foodworld", "--config", "config.yml", "approve", $Package.Directory.FullName, "--by", $By)
if ($Note) { $ArgsList += @("--note", $Note) }
if ($AllowRisk) { $ArgsList += "--allow-risk" }
& .\.venv\Scripts\python.exe @ArgsList
