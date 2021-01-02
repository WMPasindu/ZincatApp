import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "test.db";
const database_version = "1.0";
const database_displayname = "Zincat App Database";
const database_size = 200000;

export default class Database {
    initDB() {
        let db: any;
        return new Promise((resolve) => {
            console.log("Plugin integrity check ...");
            SQLite.echoTest()
                .then(() => {
                    console.log("Integrity check passed ...");
                    console.log("Opening database ...");
                    SQLite.openDatabase(
                        database_name,
                        database_version,
                        database_displayname,
                        database_size
                    )
                        .then(DB => {
                            db = DB;
                            console.log("Database OPEN");
                            db.executeSql('SELECT 1 FROM logs LIMIT 1').then(() => {
                                console.log("Database is ready ... executing query ...");
                            }).catch((error) => {
                                console.log("Received error: ", error);
                                console.log("Database not yet ready ... populating data");
                                db.transaction((tx) => {
                                    tx.executeSql('CREATE TABLE IF NOT EXISTS logs (date_time, location, hubo_reading)');
                                }).then(() => {
                                    console.log("Table created successfully");
                                }).catch(error => {
                                    console.log(error);
                                });
                            });
                            resolve(db);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log("echoTest failed - plugin not functional");
                });
        });
    };

    closeDatabase(db) {
        if (db) {
            console.log("Closing DB");
            db.close()
                .then(status => {
                    console.log("Database CLOSED");
                })
                .catch(error => {
                    console.log("DB Closed Error Occured! -- " + error);
                });
        } else {
            console.log("Database was not OPENED");
        }
    };

    addNewJobs(jobs) {
        return new Promise((resolve) => {
            this.initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('INSERT INTO logs VALUES (?, ?, ?)', [jobs.date, jobs.location, jobs.hubo]).then(([tx, results]) => {
                        resolve(results);
                        // tx.executeSql('INSERT INTO inspection_jobs VALUES (?, ?, ?,)', [jobs.jobId, jobs.referenceNumber, jobs.response]).then(([tx, results]) => {
                            // resolve(results);
                    });
                }).then((result) => {
                    this.closeDatabase(db);
                }).catch((error) => {
                    console.log("An error occured during data insert to db -- "+error);
                });
            }).catch((error) => {
                console.log("adding new inspection jobs function error occured !!! -- "+error);
            });
        });
    }

    listProduct() {
        return new Promise((resolve) => {
          const logs = [];
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT * FROM logs', []).then(([tx,results]) => {
                console.log("Query completed" + results.rows.length);
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  const { date_time, location, hubo_reading } = row;
                  logs.push({
                    date_time,
                    location,
                    hubo_reading
                  });
                }
                console.log(logs);
                resolve(logs);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
}