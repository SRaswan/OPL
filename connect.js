const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/opl_data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the OPL database.');
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
