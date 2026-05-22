Option Explicit

Dim shell
Dim watchdogPath
Dim command

Set shell = CreateObject("WScript.Shell")
watchdogPath = "C:\Users\elrub\Desktop\CCODEX\01_PROYECTOS\busca-contactos-booking-gas\scripts\watchdog_objetivo_1000.ps1"
command = "powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File """ & watchdogPath & """"

' 0 = ventana oculta, False = no esperar (segundo plano).
shell.Run command, 0, False
