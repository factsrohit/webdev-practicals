const fs = require('fs');
const path = require('path');

// File path
const logFile = path.join(__dirname, 'logs.txt');

// Log function
function log(data) {
    const timestamp = new Date().toLocaleString();
    const entry = `[${timestamp}] ${data}\n`;

    // Append to logs.txt
    fs.appendFile(logFile, entry, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        } else {
            console.log("Log saved:", entry.trim());
        }
    });
}

// Simulate attendance logging
function markAttendance(username) {
    const message = `${username} is present in college`;
    log(message);
}

// Example usage
markAttendance("Rohit");
markAttendance("Yash");
markAttendance("Shreshtha");
markAttendance("Sudhanshu");
markAttendance("Omkar");
markAttendance("Sumit");