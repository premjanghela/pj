@echo off
echo List of all saved WiFi networks:
netsh wlan show profiles
echo.
set /p ssid="Enter the WiFi name (SSID) to retrieve the password: "
echo.
netsh wlan show profile name="%ssid%" key=clear | findstr Key
pause
