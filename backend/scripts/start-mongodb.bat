@echo off
echo Starting MongoDB and initializing database...

REM Start MongoDB service (Windows)
net start MongoDB

REM Wait a moment for MongoDB to start
timeout /t 3 /nobreak > nul

REM Initialize the database
node init-db.js

echo.
echo MongoDB is ready! You can now start your server with: npm run dev
pause
