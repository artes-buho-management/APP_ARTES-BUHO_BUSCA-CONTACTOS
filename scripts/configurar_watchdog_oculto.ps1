$ErrorActionPreference = "Stop"

$taskName = "CodexWatchdogContactos"
$vbsPath = "C:\Users\elrub\Desktop\CCODEX\01_PROYECTOS\busca-contactos-booking-gas\scripts\watchdog_hidden.vbs"
$taskCommand = "wscript.exe //B //nologo `"$vbsPath`""

try {
  schtasks /Query /TN $taskName | Out-Null
  schtasks /Change /TN $taskName /TR $taskCommand | Out-Null
  Write-Host "Tarea actualizada a modo oculto: $taskName"
} catch {
  $startTime = (Get-Date).AddMinutes(1).ToString("HH:mm")
  schtasks /Create /TN $taskName /SC ONCE /ST $startTime /RL HIGHEST /F /TR $taskCommand | Out-Null
  Write-Host "Tarea creada en modo oculto: $taskName"
}

Write-Host "Comando configurado:"
Write-Host $taskCommand
