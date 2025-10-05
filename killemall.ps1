Get-WmiObject Win32_Process | Where-Object { $_.ExecutablePath -like "C:\dev\*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
