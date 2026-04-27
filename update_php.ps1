$phpDir = "C:\php83"
$zipPath = "$PWD\php83.zip"

Write-Host "Setting up PHP 8.3 in $phpDir"

if (!(Test-Path $phpDir)) {
    New-Item -ItemType Directory -Force -Path $phpDir | Out-Null
}

Write-Host "Downloading PHP 8.3..."
Invoke-WebRequest -Uri "https://windows.php.net/downloads/releases/php-8.3.30-nts-Win32-vs16-x64.zip" -OutFile $zipPath

Write-Host "Extracting PHP 8.3 (this may take a minute)..."
Expand-Archive -Path $zipPath -DestinationPath $phpDir -Force

Write-Host "Configuring php.ini for Laravel..."
$iniPath = "$phpDir\php.ini"
Copy-Item "$phpDir\php.ini-development" -Destination $iniPath

# Enable required extensions for Laravel
$iniContent = Get-Content $iniPath
$iniContent = $iniContent -replace "^;extension=curl", "extension=curl"
$iniContent = $iniContent -replace "^;extension=fileinfo", "extension=fileinfo"
$iniContent = $iniContent -replace "^;extension=mbstring", "extension=mbstring"
$iniContent = $iniContent -replace "^;extension=openssl", "extension=openssl"
$iniContent = $iniContent -replace "^;extension=pdo_mysql", "extension=pdo_mysql"
$iniContent = $iniContent -replace "^;extension=pdo_sqlite", "extension=pdo_sqlite"
$iniContent = $iniContent -replace "^;extension_dir = `"ext`"", "extension_dir = `"ext`""
$iniContent | Set-Content $iniPath

Write-Host "Adding PHP to User PATH..."
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notmatch [regex]::Escape($phpDir)) {
    [Environment]::SetEnvironmentVariable("Path", "$phpDir;$userPath", "User")
    Write-Host "PHP 8.3 added to Path successfully."
} else {
    Write-Host "PHP 8.3 is already in the Path."
}

Remove-Item $zipPath -Force
Write-Host ""
Write-Host "================================================================"
Write-Host "PHP update complete!"
Write-Host "IMPORTANT: Please close this terminal and open a new one so the new PATH takes effect."
Write-Host "After reopening the terminal, you can run: composer run setup"
Write-Host "================================================================"
