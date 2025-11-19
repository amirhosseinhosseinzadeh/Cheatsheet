Get-WmiObject Win32_Process | Where-Object { $_.ExecutablePath -like $path } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
