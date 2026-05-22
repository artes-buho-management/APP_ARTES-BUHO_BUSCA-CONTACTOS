Option Explicit

Dim shell
Dim fso
Dim scriptDir
Dim args
Dim i
Dim command

Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
args = ""

For i = 0 To WScript.Arguments.Count - 1
  args = args & " """ & Replace(WScript.Arguments(i), """", """""") & """"
Next

command = "powershell -NoProfile -ExecutionPolicy Bypass -File """ & scriptDir & "\push_and_deploy.ps1""" & args

' 0 = oculto, False = no esperar a que termine
shell.Run command, 0, False

