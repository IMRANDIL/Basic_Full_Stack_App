const connection = require('../DataBase/Connection');
let instance = null;


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM people`;
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }



    async insertNewName(name) {
        try {

        } catch (error) {
            console.log(error);
        }
    }






}


module.exports = DbService;
