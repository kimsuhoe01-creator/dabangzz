$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent
Set-Location $Root
$Approval = Get-ChildItem -Path "runtime\output" -Filter approval.json -Recurse -File |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
if (-not $Approval) { throw "승인된 패키지가 없습니다." }
& .\.venv\Scripts\python.exe -m foodworld --config config.yml publish $Approval.Directory.FullName
