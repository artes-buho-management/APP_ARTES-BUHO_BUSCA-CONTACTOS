param(
  [string]$Message = "docs: update README"
)

$ErrorActionPreference = "Stop"

git add README.md
git commit -m $Message
git push

Write-Output "README_PUSH_OK"
