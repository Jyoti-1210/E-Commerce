@echo off
title Shoppyx - Starting...

echo ========================================
echo        SHOPPYX - Full Stack Runner
echo ========================================
echo.

:: Start Backend
echo [1/2] Starting Backend Server...
cd /d "%~dp0backend"
start "Shoppyx Backend" cmd /k "title Shoppyx Backend && color 0A && echo Backend starting on http://localhost:5000 && npm run dev"

:: Start Frontend
echo [2/2] Starting Frontend Server...
cd /d "%~dp0frontend"
start "Shoppyx Frontend" cmd /k "title Shoppyx Frontend && color 0B && echo Frontend starting on http://localhost:3001 && npm start"

echo.
echo ========================================
echo   Both servers are starting!
echo   Backend:  http://localhost:5000
echo   Frontend: http://localhost:3001
echo ========================================
echo.
echo You can close this window. The servers
echo are running in their own windows.
echo.
pause
